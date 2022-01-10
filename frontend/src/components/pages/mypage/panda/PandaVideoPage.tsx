import React, {FC, useState} from 'react';
import VideoCard from "../../../UI/cards/VideoCard";
import {loadingVideoData, videoData} from "./pandaTypes";


const PandaVideoPage: FC = () => {
    const [loading, setLoading] = useState(true)

    if(loading){
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                {
                                    loadingVideoData.map((item, index: number) =>
                                        <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={index}>
                                            <VideoCard
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
    }

    return (
        <>
            <div className="container">


                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            {
                                videoData.map((item, index: number) =>
                                    <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={index}>
                                        <VideoCard
                                            title={item.title}
                                            image={item.image}
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
