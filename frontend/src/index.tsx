import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.min.css'
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
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
