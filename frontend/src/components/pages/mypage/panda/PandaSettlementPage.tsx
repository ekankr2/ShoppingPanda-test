import React from 'react';
import PandaSettlementPanel from "../../../UI/panel/PandaSettlementPanel";
import MyPageTable from "../../../UI/table/MyPageTable";
import {latestOrders} from "../buyer/buyerTypes";

const PandaSettlementPage = () => {
    return (
        <>
            <div className="container">
                <PandaSettlementPanel/>

                {/*<div className="row">*/}
                {/*    <div className="col-12">*/}
                {/*        <div className="custom-card">*/}
                {/*            <div className="card__body is-hidden-mobile">*/}
                {/*                {*/}
                {/*                    buyerSituationList ?*/}
                {/*                        <MyPageTable*/}
                {/*                            limit="5"*/}
                {/*                            headData={latestOrders.header}*/}
                {/*                            renderHead={(item: any, index: number) => renderHead(item, index)}*/}
                {/*                            bodyData={buyerSituationList.pageList}*/}
                {/*                            renderBody={(item: any, index: number) => renderBody(item, index)}*/}
                {/*                        /> : null*/}
                {/*                }*/}

                {/*            </div>*/}
                {/*            /!*mobile table*!/*/}
                {/*            <div className="card__body is-hidden-tablet">*/}
                {/*                {*/}
                {/*                    buyerSituationList ?*/}
                {/*                        <MyPageTable*/}
                {/*                            limit="5"*/}
                {/*                            headData={latestOrders.headerMobile}*/}
                {/*                            renderHead={(item: any, index: number) => renderHead(item, index)}*/}
                {/*                            bodyData={buyerSituationList.pageList}*/}
                {/*                            renderBody={(item: any, index: number) => renderBodyMobile(item, index)}*/}
                {/*                        /> : null*/}
                {/*                }*/}

                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    );
};

export default PandaSettlementPage;
