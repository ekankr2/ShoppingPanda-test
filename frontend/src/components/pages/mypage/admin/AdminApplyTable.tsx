import React, {FC, useCallback, useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Button from "../../../UI/Button";
import {
    useGetAdminApplyPandaList, useGetAdminApplyShopList,
} from "../../../../api/queryHooks/mypageHooks/adminPageHooks";

interface Props {
    selectedMode: string
}

function confirmOrder(event: React.MouseEvent, cellValues: any) {
    event.stopPropagation()
    console.log(cellValues)
}

const shopColumns = [
    {field: 'id', headerName: 'id', flex: 0.5},
    {field: 'shopName', headerName: '상점명', flex: 2},
    {field: 'number', headerName: '번호', flex: 0.7},
    {field: 'crn', headerName: 'crn', flex: 1.1},
    {
        field: "승인하기",
        flex: 0.8,
        renderCell: (cellValues: any) => {
            return (
                <Button
                    text="승인완료"
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

const pandaColumns = [
    {field: 'id', headerName: 'id', flex: 0.5},
    {field: 'pandaName', headerName: '판다명', flex: 2},
    {field: 'mainCH', headerName: '플랫폼', flex: 0.7},
    {field: 'category', headerName: '카테고리', flex: 1.1},
    {
        field: "승인하기",
        flex: 0.8,
        renderCell: (cellValues: any) => {
            return (
                <Button
                    text="승인완료"
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

const AdminApplyTable: FC<Props> = ({selectedMode}) => {
    const [page, setPage] = useState(0)
    const [rows, setRows] = useState<any>([])
    const [totalElement, setTotalElement] = useState<any>(0)
    const [selectedRows, setSelectedRows] = useState<any>([]);
    const {data: shopApplyList,isFetching, refetch: refetchShop} = useGetAdminApplyShopList(page)
    const {data: pandaApplyList, refetch: refetchPanda} = useGetAdminApplyPandaList(page)

    useEffect(() => {
        if (selectedMode === '상점신청') {
            setRows(shopApplyList?.aplist)
            setTotalElement(shopApplyList?.totalElement)
        }
        if (selectedMode === '판다신청') {
            setRows(pandaApplyList?.aplist)
            setTotalElement(pandaApplyList?.totalElement)
        }

    }, [shopApplyList,pandaApplyList, selectedMode])

    const pageChangeAction = useCallback((page: number) => {
        setPage(page)
        if (selectedMode === '상점신청') {
            refetchShop()
        }
        if (selectedMode === '판다신청') {
            refetchPanda()
        }
    }, [selectedMode, page])

    const confirmSelected = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        console.log('선택된 주문 확인', selectedRows)
    }, [selectedRows])

    const printList = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        console.log('인쇄하기')
    }, [])

    return (
        <>
            <div className='custom-card'>
                <div className="card__header">
                    <Button
                        className="is-danger mr-3"
                        disabled={selectedRows?.length === 0}
                        text='선택 확인'
                        onClick={confirmSelected}
                    />
                    <Button
                        className="is-info float-end"
                        text='목록 인쇄'
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
                            columns={selectedMode === '상점신청' ? shopColumns : pandaColumns}
                            page={page}
                            pageSize={10}
                            loading={isFetching}
                            checkboxSelection
                            pagination
                            paginationMode="server"
                            rowsPerPageOptions={[10]}
                            onPageChange={(page) => {
                                pageChangeAction(page)
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

export default AdminApplyTable;
