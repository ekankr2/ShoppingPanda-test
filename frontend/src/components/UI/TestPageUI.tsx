import React, {FC, useCallback, useState} from 'react';
import axios from "axios";



const TestPageUi: FC = () => {
    const [loading, setLoading] = useState(false)
    const [person, setPerson] = useState(null)

    console.log(person)

    const fetchPerson = useCallback(async ()=>{
        setLoading(true)
        const res = await axios(`https://randomuser.me/api#`);

        if (res.data) {
            setPerson(res.data.results[0])
            return res.data.results[0]
        }
        setLoading(false)
        throw new Error("Loading failed, likely rate limit");
    },[])

    const getPerson = useCallback(()=>{
        if(loading){
            throw fetchPerson()
        }

        return person
    },[loading, fetchPerson])

    return (
        <>
            <h4>hi</h4>
            <h4>{getPerson}</h4>
        </>
    );
};

export default TestPageUi;