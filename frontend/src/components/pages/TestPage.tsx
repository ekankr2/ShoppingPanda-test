import React, {FC, Suspense} from 'react';
import ReactLoading from 'react-loading'
import ErrorBoundary from "../ErrorBoundary";
import {createResource} from "../UI/testApi";

const resource = createResource()

const TestPage = () => {

    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<ReactLoading type="balls"/>}>
                    <Person resource={resource}/>
                </Suspense>
            </ErrorBoundary>
        </>
    );
};

const Person: FC<any> = ({ resource }) => {
    const person = resource.person.read();

    return <div>{person.name.first}</div>;
};

export default TestPage;