import axios from "axios";
import {onTokenRefresh} from "../store/authHooks";

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
                await onTokenRefresh()
                return axios(config)
            } catch (err) {
                console.error('재발급 실패', err)
            }
        }

        if (status === 401) {
            // 추후에 401 필요하면 추가
        }
        return Promise.reject(error)
    }
)

export default axios
