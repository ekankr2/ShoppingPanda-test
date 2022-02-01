import React, {useCallback, useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Button from "../../../UI/Button";
import axios from "axios";
import {dateFormatter} from "../../../../store/actions/DateFormat";

interface rowsType {
    id: number
    productName: string
    price: number
    orderAt: any
}

function checkOrder(event: React.MouseEvent, cellValues: any) {
    event.stopPropagation()
    console.log(cellValues)
}

const columns = [
    {field: 'id', headerName: '주문번호', flex: 0.5},
    {field: 'name', headerName: '상품명', flex: 2},
    {field: 'price', headerName: '가격', flex: 1},
    {field: 'orderAt', headerName: '주문일자', flex: 1.1},
    {
        field: "주문확인",
        flex: 1,
        renderCell: (cellValues: any) => {
            return (
                <Button
                    text="주문확인"
                    className="is-primary"
                    onClick={(event) => {
                        checkOrder(event, cellValues);
                    }}
                >
                    Print
                </Button>
            );
        }
    },
];

const SellerNewOrderPage = () => {
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [rows, setRows] = useState<rowsType[]>([])
    const [selectedRows, setSelectedRows] = React.useState<any>([]);

    console.log(rows)

    const handleClick = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        console.log('선택된 주문 확인', selectedRows)
    }, [selectedRows])

    const TestApiCall = useCallback(
        async () => {
            try {
                setLoading(true)
                const response = await axios.get(`/api/shop/shoporderlist?type=recent&size=10&page=${page}`)
                const data = response.data;
                setLoading(false)
                data.pageList.forEach((data: any) => {
                    data.orderAt = dateFormatter(data.orderAt)
                })
                setRows(data.pageList)
            } catch(err) {
                console.log('테이블 요청 오류');
            }
        },[page])

    useEffect(()=>{
        TestApiCall()
    },[page])

    return (
        <div className='container'>
            <div className='custom-card'>
                <div className="card__header">
                    <Button
                        className="is-primary"
                        disabled={selectedRows.length === 0}
                        text='선택 주문 확인'
                        onClick={handleClick}
                    />
                </div>
                <div style={{width: "100%", height: '600px'}}>
                    <DataGrid
                        rows={rows}
                        rowCount={rows.length}
                        columns={columns}
                        loading={loading}
                        checkboxSelection
                        rowsPerPageOptions={[10]}
                        onPageChange={(page)=>{setPage(page)}}
                        onSelectionModelChange={(ids) => {
                            const selectedIDs = new Set(ids);
                            const selectedRows = rows.filter((row) =>
                                selectedIDs.has(row.id),
                            );
                            setSelectedRows(selectedRows);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SellerNewOrderPage;
