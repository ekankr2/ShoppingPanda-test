import React, {Fragment, FC, useState, ReactEventHandler} from 'react';
import usePagination from "../hooks/usePagination";

export interface CountriesData {
    itemsPerPage: number;
    startFrom?: number;
    data: Country[]
    searchByData?: { label: string; value: string; }[]
}

const Countries: FC<CountriesData> = ({data, itemsPerPage, startFrom, searchByData}) => {
    const [search, setSearch] = useState('')
    const [searchBy, setSearchBy] = useState(searchByData && searchByData.length > 0 ? searchByData[0].value : '')
    const [searchFor, setSearchFor] = useState('')
    const {slicedData, pagination, prevPage, nextPage, changePage, setFilteredData, setSearching} =
        usePagination({itemsPerPage, data, startFrom});

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearching(true)
        const copiedData = [...data]
        const filtered = copiedData.filter(country => {
            let searchKey = "name";
            if(searchByData && searchByData.length > 0) {
                searchKey = searchBy
            }
            // @ts-ignore
            return country[searchKey].toLowerCase().includes(search.trim().toLowerCase())
        })
        setFilteredData(filtered)
        setSearchFor(search)
    }

    return (
        <div className="wrapper">
            <form onSubmit={submitHandler} className="mt-3 is-flex" style={{justifyContent: 'center'}}>
                {searchByData && searchByData.length > 0 &&
                    <div className="select mr-2">
                        <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                            {searchByData.map((data: { value: string, label: string }, index) => (
                                <option key={index} value={data.value}>{data.label}</option>
                            ))}
                        </select>
                    </div>
                }
                <div className="field mr-2">
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="button is-link">Search</button>
            </form>
            {searchFor && <h2 className="mb-6 has-text-centered is-size-2">Search results for: "{searchFor}"</h2>}
            {slicedData.length > 0 ?
                <Fragment>
                    <table className="table is-fullwidth is-striped">
                        <thead>
                        <tr>
                            <th>Country</th>
                            <th>Capital</th>
                            <th>Code</th>
                            <th>Currency</th>
                            <th>Phone Code</th>
                        </tr>
                        </thead>
                        <tbody>
                        {slicedData.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.capital}</td>
                                <td>{item.iso2}</td>
                                <td>{item.currency}</td>
                                <td>{item.phone_code}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <nav className="pagination">
                        <a href="/#" className="pagination-previous" onClick={prevPage}>Previous</a>
                        <a href="/#" className="pagination-next" onClick={nextPage}>Next page</a>
                        <ul className="pagination-list">
                            {pagination.map((page) => {
                                    if (!page.ellipsis) {
                                        return <li key={page.id}>
                                            <a
                                                href="/#"
                                                className={page.current ? 'pagination-link is-current' : 'pagination-link'}
                                                onClick={(e) => changePage(page.id, e)}>
                                                {page.id}
                                            </a>
                                        </li>;
                                    } else {
                                        return <li key={page.id}><span className="pagination-ellipsis">&hellip;</span></li>
                                    }
                                }
                            )}
                        </ul>
                    </nav>
                </Fragment>
                :
                <div className="message is-link">
                    <div className="message-body has-text-centered">No results</div>
                </div>
            }
        </div>
    );
}

export default Countries;
