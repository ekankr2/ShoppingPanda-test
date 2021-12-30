import React, {FC, useState} from "react";
import './myPageTable.css'

interface Props{
    limit?: string
    headData: string[]
    bodyData: any
    renderHead?: any
    renderBody?: any
}

const MyPageTable: FC<Props> = ({limit, bodyData, headData, renderHead, renderBody}) => {

    const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData

    const [dataShow, setDataShow] = useState(initDataShow)

    let pages = 1
    let range: any = []

    if(limit !== undefined) {
        let page = Math.floor(bodyData.length / Number(limit))
        pages = bodyData.length % Number(limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)

    const selectPage = (page:number) => {
        const start = Number(limit) * page
        const end = start + Number(limit)

        setDataShow(bodyData.slice(start, end))
        setCurrPage(page)
    }

    return (
        <>
            <div className="table-wrapper">
                <table>
                    {
                        headData && renderHead ? (
                            <thead>
                            <tr>
                                {
                                    headData.map((item:{}, index) => renderHead(item, index))
                                }
                            </tr>
                            </thead>
                        ) :null
                    }
                    {
                        bodyData && renderBody ? (
                            <tbody>
                            {
                                dataShow.map((item: typeof initDataShow, index:number) => renderBody(item, index))
                            }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item:any, index:number) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    )
}

export default MyPageTable
