import axios from "axios";

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
        console.log('리스폰스: ',response)
        return response
    },
    error => {
        console.error(error)
        return Promise.reject(error)
    }
)

export default axios
