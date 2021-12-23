import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import 'bulma/css/bulma.min.css'
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/layout/Layout";

import './assets/boxicons-2.1.1/css/boxicons.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Layout />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
