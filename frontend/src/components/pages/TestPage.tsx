import React, {Suspense} from 'react';
import ReactLoading from 'react-loading'
import ErrorBoundary from "../ErrorBoundary";
import TestPageUi from "../UI/TestPageUI";

const TestPage = () => {

    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<ReactLoading type="balls"/>}>
                    <TestPageUi/>
                </Suspense>
            </ErrorBoundary>
        </>
    );
};

export default TestPage;