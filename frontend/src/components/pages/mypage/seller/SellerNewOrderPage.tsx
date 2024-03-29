import React, {useCallback, useMemo, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Button from "../../../UI/Button";
import Modal from "../../../UI/modal/Modal";
import {useGetSellerOrderList} from "../../../../api/queryHooks/mypageHooks/sellerMypageHooks";
import {useGetSituationDetail} from "../../../../api/queryHooks/mypageHooks/buyerMypageHooks";

function confirmOrder(event: React.MouseEvent, cellValues: any) {
    event.stopPropagation()
    console.log(cellValues)
}

function cancelOrder(event: React.MouseEvent, cellValues: any) {
    event.stopPropagation()
    console.log(cellValues)
}

const SellerNewOrderPage = () => {
    const [page, setPage] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [detailId, setDetailId] = useState(0)
    const [selectedRows, setSelectedRows] = useState<any>([]);
    const {data: orderList, isFetching} = useGetSellerOrderList(10, page)
    const {data: situationDetail} = useGetSituationDetail(detailId)

    const columns = useMemo(()=>[
        {field: 'id', headerName: '주문번호', flex: 0.5},
        {field: 'name', headerName: '상품명', flex: 2},
        {field: 'price', headerName: '가격', flex: 0.7},
        {field: 'orderAt', headerName: '주문일자', flex: 1.1},
        {
            field: "주문확인",
            flex: 0.6,
            renderCell: (cellValues: any) => {
                return (
                    <Button
                        text="주문확인"
                        className="is-primary"
                        onClick={(event) => {
                            confirmOrder(event, cellValues);
                        }}
                    >
                    </Button>
                );
            }
        },
        {
            field: "주문취소",
            flex: 0.6,
            renderCell: (cellValues: any) => {
                return (
                    <Button
                        text="주문취소"
                        className="is-danger"
                        onClick={(event) => {
                            cancelOrder(event, cellValues);
                        }}
                    >
                    </Button>
                );
            }
        },
        {
            field: "주문상세",
            flex: 0.6,
            renderCell: (cellValues: any) => {
                return (
                    <Button
                        text="상세보기"
                        className="is-info"
                        onClick={(event) => {
                            fetchOrderDetail(event, cellValues);
                        }}
                    >
                    </Button>
                );
            }
        },
    ],[])

    const fetchOrderDetail = useCallback((event: React.MouseEvent, cellValues: any) => {
        event.stopPropagation()
        setDetailId(cellValues.id)
        setShowModal(true)
    },[])

    const confirmSelected = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        console.log('선택된 주문 확인', selectedRows)
    },[selectedRows])

    const cancelSelected = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        console.log('선택된 주문 확인', selectedRows)
    },[selectedRows])

    const printList = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        console.log('인쇄하기')
    },[selectedRows])

    return (
        <>
            <div className='container'>
                <div className='custom-card'>
                    <div className="card__header">
                        <Button
                            className="is-primary mr-3"
                            disabled={selectedRows.length === 0}
                            text='선택 주문 확인'
                            onClick={confirmSelected}
                        />
                        <Button
                            className="is-danger"
                            disabled={selectedRows.length === 0}
                            text='선택 주문 취소'
                            onClick={cancelSelected}
                        />
                        <Button
                            className="is-info float-end"
                            text='주문서 인쇄'
                            onClick={printList}
                        />
                    </div>
                    <div style={{width: "100%", height: '650px'}}>
                        {orderList &&
                            <DataGrid
                                rows={orderList.pageList}
                                rowCount={orderList.totalElement}
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
                                    const selectedRows = orderList.pageList.filter((row) =>
                                        selectedIDs.has(row.id),
                                    );
                                    setSelectedRows(selectedRows);
                                }}
                            />
                        }

                    </div>
                </div>
            </div>

            {
                showModal &&
                <Modal onClose={() => {
                    setShowModal(false)
                }} title={"주문 상세보기"}>
                    {/*{*/}
                    {/*    buyerSituationDetail ?*/}
                    {/*        <>*/}
                    {/*            여기 안에 모달 내용*/}
                    {/*        </>*/}

                    {/*        : <div>데이터 없음</div>*/}
                    {/*}*/}

                </Modal>
            }
        </>

    );
};

export default SellerNewOrderPage;
