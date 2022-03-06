import React, {FC, useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Button from "../../../UI/Button";
import {useGetAdminShopSettlementCompleteList, useGetAdminShopSettlementList
} from "../../../../api/queryHooks/mypageHooks/adminPageHooks";

interface Props{
    selectedMode: string
}

function confirmOrder(event: React.MouseEvent, cellValues: any) {
    event.stopPropagation()
    console.log(cellValues)
}

const AdminShopTable: FC<Props> = ({selectedMode}) => {
    const [page, setPage] = useState(0)
    const [rows, setRows] = useState<any>([])
    const [totalElement, setTotalElement] = useState<any>(0)
    const [selectedRows, setSelectedRows] = useState<any>([]);
    const {data: shopSettlementList, isFetching} = useGetAdminShopSettlementList()
    const {data: shopSettlementCompleteList} = useGetAdminShopSettlementCompleteList()

    console.log(shopSettlementList)

    useEffect(() => {
        if(selectedMode === '정산필요') {
            setRows(shopSettlementList?.settleShopDetails)
            setTotalElement(shopSettlementList?.totalElement)
        }
        if(selectedMode === '정산완료') {
            setRows(shopSettlementCompleteList?.settleShopDetails)
            setTotalElement(shopSettlementCompleteList?.totalElement)
        }

    }, [isFetching, selectedMode])

    const columns = [
        {field: 'id', headerName: '주문번호', flex: 0.5},
        {field: 'shopName', headerName: '상점명', flex: 1.5},
        {field: 'deposit', headerName: '금액', flex: 0.7},
        {field: 'enrollSettle', headerName: '정산일자', flex: 1.1},
        {
            field: "정산확인",
            flex: 0.8,
            renderCell: (cellValues: any) => {
                return (
                    <Button
                        text="정산확인"
                        className="is-danger"
                        onClick={(event) => {
                            confirmOrder(event, cellValues);
                        }}
                    >
                    </Button>
                );
            }
        },
    ];

    const confirmSelected = (event: React.MouseEvent) => {
        event.preventDefault()
        console.log('선택된 주문 확인', selectedRows)
    }

    const printList = (event: React.MouseEvent) => {
        event.preventDefault()
        console.log('인쇄하기')
    }

    return (
        <>
            <div className='custom-card'>
                <div className="card__header">
                    <Button
                        className="is-danger mr-3"
                        disabled={selectedRows?.length === 0}
                        text='선택 정산 확인'
                        onClick={confirmSelected}
                    />
                    <Button
                        className="is-info float-end"
                        text='주문서 인쇄'
                        onClick={printList}
                    />
                </div>
                <div style={{width: "100%", height: '650px'}}>
                    {
                        rows &&
                        <DataGrid
                            style={{color: "white"}}
                            rows={rows}
                            rowCount={totalElement}
                            columns={columns}
                            page={page}
                            pageSize={10}
                            loading={isFetching}
                            checkboxSelection
                            pagination
                            paginationMode="server"
                            rowsPerPageOptions={[10]}
                            onPageChange={(page) => {
                                setPage(page)
                            }}
                            onSelectionModelChange={(ids) => {
                                const selectedIDs = new Set(ids);
                                const selectedRows = rows.filter((row: any) =>
                                    selectedIDs.has(row.id),
                                );
                                setSelectedRows(selectedRows);
                            }}
                        />
                    }
                </div>
            </div>
        </>

    );
};

export default AdminShopTable;
