import React, {FC} from 'react';
import axios from "axios";

function fetchBookLists() {
    const res = axios(`https://randomuser.me/api#`);


    if (res) {
        // @ts-ignore
        const data = res.data
        console.log(data.results[0])
        return data.results[0];
    } else {
        throw new Error("Loading failed, likely rate limit");
    }
}

const TestPageUi: FC = () => {
    return (
        <>
            <PersonList/>
        </>
    );
};


const PersonList: FC = () => {
    const person: any = fetchBookLists()

    return (
        <>
            <h2>hello</h2>
            <h3>{person.gender}</h3>
        </>
    )
}

export default TestPageUi;