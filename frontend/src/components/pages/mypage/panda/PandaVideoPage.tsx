import React, {FC, useEffect} from 'react';
import VideoCard from "../../../UI/cards/VideoCard";
import {useDispatch, useSelector} from "react-redux";
import {setError, setLoading} from "../../../../store/actions/pageActions";
import {RootState} from "../../../../store";
import {fetchPandaVideoList} from "../../../../store/actions/mypageActions/pandaActions";
import Message from "../../../UI/Message";


const PandaVideoPage: FC = () => {
    const {error} = useSelector((state: RootState) => state.page);
    const {pandaVideoList} = useSelector((state: RootState) => state.panda);
    const dispatch = useDispatch()

    useEffect(()=>{
        return(()=>{
            if(error){
                dispatch(setError(''))
            }
        })
    },[error, dispatch])

    useEffect(() => {
        if(error) {
            dispatch(setError(''));
        }
        dispatch(fetchPandaVideoList(() => setLoading(false)))
    }, [dispatch])

    return (
        <>
            {error ? <Message msg={error} type="danger" /> : null}
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
