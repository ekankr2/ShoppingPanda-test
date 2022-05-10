import React, {FC, Suspense, useLayoutEffect} from 'react';
import {Route, Routes,} from 'react-router-dom';
import './App.css';
import Loader from './components/UI/Loader';
import {useAuthStore} from "./store/authHooks";
import {useWindowStore} from "./store/windowHooks";
import MainRouters from "./components/routers/MainRouters";


const App: FC = () => {
    const reIssue = useAuthStore(state => state.reIssue)
    const loading = useWindowStore(state => state.loading)

    useLayoutEffect(() => {
        reIssue()
    }, []);

    if (loading) {
        return <Loader/>;
    }

    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/*" element={<MainRouters/>}/>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
