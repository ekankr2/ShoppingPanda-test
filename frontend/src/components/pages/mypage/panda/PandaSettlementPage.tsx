import React from 'react';
import SettlementPanel from "../../../UI/panel/SettlementPanel";

const PandaSettlementPage = () => {
    return (
        <>
            <div className="container">
                <SettlementPanel itemsPerPage={10}/>
            </div>
        </>
    );
};

export default PandaSettlementPage;
