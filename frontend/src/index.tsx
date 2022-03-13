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
import axios from "axios";

axios.defaults.withCredentials = true

const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
