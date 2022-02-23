import axios from "axios";

const baseUrl = 'http://localhost:8080/'

const request = axios.create({
    baseURL: baseUrl
})
// 타임아웃
request.defaults.timeout = 2500

// 요청 인터셉터
request.interceptors.request.use(
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
request.interceptors.request.use(
    response => {
        // 응답 로직 작성
        const res = response.data
        return res
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default request;
