import React, {FC} from 'react';
import VideoCard from "../../../UI/cards/VideoCard";
import Message from "../../../UI/Message";
import {useGetPandaVideoList} from "../../../../api/queryHooks/mypageHooks/pandaMypageHooks";


const PandaVideoPage: FC = () => {
    const {data: pandaVideoList, error} = useGetPandaVideoList()

    return (
        <>
            {error ? <Message msg='동영상 리스트 통신이상' type="danger" /> : null}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {pandaVideoList &&
                                pandaVideoList.details.map((item, index: number) =>
                                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={index}>
                                        <VideoCard
                                            panda={item.panda}
                                            link={item.link}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PandaVideoPage;
