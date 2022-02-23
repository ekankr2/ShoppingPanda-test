import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import 'bulma/css/bulma.min.css'
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/theme.css'
import './assets/css/index.css'
import {QueryClient, QueryClientProvider} from "react-query";
import {removeCookie, setCookie} from "./store/actions/Cookie";
import axios from "axios";

//되는거시작
axios.interceptors.request.use(
    (config) => {
        if (config.url === "/api/reissuev2") {
            console.log("재발급요청입니다");
            const rtoken = window.localStorage.getItem("refreshToken");
            if (rtoken && config.headers) {
                config.headers["refreshToken"] = rtoken;
            }
        }
        console.log(config);
        const token = window.localStorage.getItem("accessToken");
        console.log("토큰");
        console.log(token);
        if (token && config.headers) {
            config.headers["accessToken"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function (response) {
        /*
            http status가 200인 경우
            응답 성공 직전 호출됩니다.
            .then() 으로 이어집니다.
        */
        console.log(response.status);
        if (response.status === 202) {
            console.log(response);
            // axios.request(response.config);
            // console.log("여기서 재 갱신을 해야하지않을까?");
            // axios.post("/api/reissue").then((response) => {
            //   console.log(response.data.success);
            //   if (response.data.success) {
            //     originalRequest._retry = true;

            //     console.log(error.config);
            //     console.log(response);
            //     console.log("재요청로직을실행합니다");
            //     return response;
        }
        console.log("200받음");
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        console.log("에라");
        console.log(error);
        console.log(error.response.status);
        if (error.response.status === 406) {
            console.log("만료된토큰입니다");
            // axios.config.headers["refreshToken"] = rtoken;
            console.log("리이슈");
            axios.post("/api/reissuev2").then((response) => {
                console.log("리이슈하면?");
                console.log(response.data.result);
                window.localStorage.setItem(
                    "accessToken",
                    response.data.data.accessToken
                );
                window.localStorage.setItem(
                    "refreshToken",
                    response.data.data.refreshToken
                );
                if (response.data.result === "success") {
                } else {
                    if (
                        window.confirm(
                            "로그인이 필요한 서비스입니다 로그인페이지로 이동하시겠습니까?"
                        )
                    ) {
                        window.location.replace("/signin");
                    } else {
                    }
                }
            });
            return axios(originalRequest);
        }
        if (error.response.status === 401) {
            console.log("로그인이 필요한서비스입니다");
            if (
                window.confirm(
                    "로그인이 필요한 서비스입니다 로그인페이지로 이동하시겠습니까?"
                )
            ) {
                window.location.replace("/signin");
            } else {
            }

            if (error.response.data.code === "4401") {
                window.location.href = "/";
            }
            return;
        }
        if (error.response.status === 400) {
            setCookie("loggedIn", "false", {path: "/"});
            setCookie("userId", "", {path: "/"});
            setCookie("panda", "", {path: "/"});
            setCookie("seller", "", {path: "/"});
            removeCookie("loggedIn");
            removeCookie("userId");
            removeCookie("panda");
            removeCookie("seller");
            console.log("에라2");
            if (
                window.confirm(
                    "로그인이 필요한 서비스입니다 로그인페이지로 이동하시겠습니까?"
                )
            ) {
                window.location.replace("/signin");
            } else {
            }

            return;
        }

        return Promise.reject(error);
    }
);

const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
