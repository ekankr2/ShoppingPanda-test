import React, {FC, Suspense} from 'react';
import ReactLoading from 'react-loading'
import ErrorBoundary from "../ErrorBoundary";
import {createResource} from "../UI/testApi";
import axios from "axios";

const fetchPerson = async () => {
    const res = await axios.get('https://randomuser.me/api');
    return res.data.results[0];
};

const resource = createResource(fetchPerson())

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
    const person = resource.read();

    return <div>{person.name.first}</div>;
};

export default TestPage;