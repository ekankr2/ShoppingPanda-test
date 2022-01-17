import React, {FC, useEffect, useState} from 'react';
import VideoCard from "../../../UI/cards/VideoCard";
import {dummyVideoData, loadingVideoData} from "./pandaTypes";
import {useDispatch, useSelector} from "react-redux";
import {setError, setLoading} from "../../../../store/actions/pageActions";
import {RootState} from "../../../../store";
import {fetchPandaVideoList} from "../../../../store/actions/mypageActions/pandaActions";
import axios from "axios";


const PandaVideoPage: FC = () => {
    const {error} = useSelector((state: RootState) => state.page);
    const {pandaVideoList} = useSelector((state: RootState) => state.panda);
    const [videoInfo, setVideoInfo] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!pandaVideoList) {
            dispatch(fetchPandaVideoList())
        }

    }, [])

    return (
        <>
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
