import React, {FC, useEffect, useState} from 'react';
import Button from "../Button";
import "./videoCard.css"
import request from "../../../api/request";

interface Props {
    link: string
    panda: string
}

function modifyBtnAction(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('수정하기')
}

function deleteBtnAction(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log('삭제하기')
}

const VideoCard: FC<Props> = ({link, panda}) => {
    const [videoInfo, setVideoInfo] = useState<any>(null)
    console.log('비디오인포: ',videoInfo)

    useEffect(() => {
        const fullUrl = `https://noembed.com/embed?url=${link}`
        request(fullUrl)
            .then((result) => {
                // console.log(result.data)
                setVideoInfo(result.data)
                return result.data
            }).then((setVideoInfo)
        )
    }, [])

    return (
        <>
            {
                videoInfo &&
                <div className="card video-card">
                    <div className="card-image video-card-image">
                        <figure className="image is-4by3">
                            <img src={videoInfo.thumbnail_url} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <a className="video-title" target="_blank" href={link}>{videoInfo.title}</a>
                            </div>
                        </div>

                        <div className="video-content">
                            <div>
                                <span className="video-sold">{panda}</span>
                                <span>{videoInfo.author_name}</span>
                            </div>
                        </div>
                    </div>

                    <footer className="card-footer has-background-white">
                        <div style={{width: "100%"}}>
                        <span className="float-start">
                            <Button onClick={modifyBtnAction} text="수정" className="is-info is-inverted"/>
                        </span>
                            <span className="float-end">
                            <Button onClick={deleteBtnAction} text="삭제" className="is-danger is-inverted"/>
                        </span>
                        </div>
                    </footer>
                </div>
            }

        </>
    );
};

export default VideoCard;
