import React, {FC, useState} from 'react';
import countries from '../../assets/JsonData/countries.json'
import Countries from "../Countries";

const PaginationTest:FC = () => {
    const [data] = useState(countries)

    return (
        <>
            <div className="container px-2">
                <Countries itemsPerPage={10} data={data} />
                <Countries itemsPerPage={5} data={data} startFrom={25}/>
            </div>
        </>
    );
};

export default PaginationTest;
