import axios from "axios";
import {useAuthStore} from "../store/authHooks";

// // export const APIADDRESS = 'http://192.168.1.50:3000'
// export const APIADDRESS = "http://localhost:8080";

// axios.defaults.baseURL = APIADDRESS

// 타임아웃
axios.defaults.timeout = 2500

// 요청 인터셉터
axios.interceptors.request.use(
    config => {
        // 요청 보내기 전
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// 응답 인터셉터
axios.interceptors.response.use(
    response => {
        // 응답 로직 작성
        return response
    },
    async error => {
        const {
            config,
            response: {status}
        } = error

        if (status === 406) {
            try {
                await useAuthStore.getState().tokenRefresh()
                return axios(config)
            } catch (err) {
                console.error('재발급 실패', err)
                if (window.confirm('로그인이 필요한 서비스입니다. 이동하실래요?')) {
                    window.location.replace('/signin')
                }
            }
        }

        if (status === 401) {
            // 추후에 401 필요하면 추가
        }
        return Promise.reject(error)
    }
)

export default axios
