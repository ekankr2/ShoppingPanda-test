import React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Button from "../../../UI/Button";

function checkOrder(event: React.MouseEvent, cellValues: any) {
    event.stopPropagation()
    console.log(cellValues)
}

const columns = [
    {field: 'id', headerName: '주문번호', flex: 0.5},
    {field: 'productName', headerName: '상품명', flex: 2},
    {field: 'price', headerName: '가격', flex: 1},
    {field: 'date', headerName: '주문일자', flex: 1},
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

const rows = [
    {id: 1, productName: '맛있다 찰떡쿠키', price: 2400, date: '12월 3일'},
    {id: 2, productName: '맛조타 양념갈비', price: 12400, date: '12월 3일'},
    {id: 3, productName: '눈에좋고 몸에좋은 당근', price: 5400, date: '12월 3일'},
    {id: 4, productName: '일곱빛깔 제주 은갈치', price: 12400, date: '12월 3일'},
    {id: 5, productName: '귀여운 뽈락', price: 4400, date: '12월 3일'},
    {id: 6, productName: '등푸른 생선 고등어', price: 2400, date: '12월 3일'},
    {id: 7, productName: '고등어의 사촌동생 전갱이', price: 2400, date: '12월 3일'},
    {id: 8, productName: '싱거운 돈코츠 라멘 고기국수', price: 8400, date: '12월 3일'},
    {id: 9, productName: '화산 폭발 초콜릿', price: 12400, date: '12월 3일'},
];

const SellerNewOrderPage = () => {
    const [selectedRows, setSelectedRows] = React.useState<any>([]);
    console.log(selectedRows)

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
        console.log('선택된 주문 확인', selectedRows)
    }

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
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
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
