import React, {FC, useState} from 'react';
import countries from '../../assets/JsonData/countries.json'
import Countries from "../Countries";

const PaginationTest:FC = () => {
    const [data] = useState(countries)

    return (
        <>
            <div className="container px-2">
                <Countries
                    itemsPerPage={10}
                    data={data}
                    searchByData={[
                        { label: 'Search by country', value: 'name'},
                        { label: 'Search by capital', value: 'capital'},
                        { label: 'Search by country code', value: 'iso2'},
                        { label: 'Search by currency', value: 'currency'},
                        { label: 'Search by phone code', value: 'phone_code'},
                    ]}
                />
                <Countries itemsPerPage={5} data={data} startFrom={25}/>
            </div>
        </>
    );
};

export default PaginationTest;
