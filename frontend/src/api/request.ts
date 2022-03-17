import axios from "axios";

const request = axios.create({
    withCredentials: false
})
// 타임아웃
request.defaults.timeout = 2500
delete request.defaults.headers.common["AccessToken"]

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
request.interceptors.response.use(
    response => {
        // 응답 로직 작성
        return response.data
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default request;
