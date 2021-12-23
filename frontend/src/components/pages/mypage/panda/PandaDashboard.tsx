import {FC} from "react";
import statusCards from '../../../../assets/JsonData/status-card-data.json'
import StatusCard from "../../../UI/cards/StatusCard";


const PandaDashboard: FC = () => {



    return (
        <>
            <h2 className="page-header">Dashboard</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                statusCards.map((item, index) =>
                                    <div className="col-lg-3 col-md-6" key={index}>
                                        <StatusCard
                                            link={item.link}
                                            icon={item.icon}
                                            count={item.count}
                                            title={item.title}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default PandaDashboard
