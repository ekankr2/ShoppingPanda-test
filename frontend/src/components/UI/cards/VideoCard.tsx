import React, {FC, useEffect, useState} from 'react';
import Button from "../Button";
import "./videoCard.css"
import axios from "axios";

interface Props {
    link: string
    panda: string
}

function linkFormatter(link: string) {
    return link.substring(32, 43)
}

function videoImageMaker(link: string) :string {
    return `https://img.youtube.com/vi/${link}/mqdefault.jpg`
}

// function getVideoInfo(link: string, setVideoInfo: () => void) :any{
//     const fullUrl = `https://noembed.com/embed?url=${link}`
//     axios.get(fullUrl)
//         .then((result)=>{
//             console.log(result.data)
//             setVideoInfo(result.data)
//         }).catch((error)=>{console.log(error)})
// }

const VideoCard: FC<Props> = ({link, panda}) => {
    const [videoInfo, setVideoInfo] = useState<any>(null)

    useEffect(()=>{
        const fullUrl = `https://noembed.com/embed?url=${link}`
        axios.get(fullUrl)
            .then((result)=>{
                // console.log(result.data)
                setVideoInfo(result.data)
                return result.data
            }).then((setVideoInfo)
        )
    },[])

    useEffect(()=>{
        console.log('비디오 정보: ',videoInfo)
    },[videoInfo])

    return (
        <>
            {
                videoInfo &&
            <div className="card video-card">
                <div className="card-image video-card-image">
                    <figure className="image is-4by3">
                        <img src={videoImageMaker(linkFormatter(link))} alt="Placeholder image"/>
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
                            <span className="video-sold">{videoInfo.author_name}</span>
                            {/*<span><i className="bx bx bx-won"></i>15만원</span>*/}
                        </div>
                    </div>
                </div>

                <footer className="card-footer has-background-white">
                    <div style={{width: "100%"}}>
                        <span className="float-start">
                            <Button text="수정" className="is-info is-inverted"/>
                        </span>
                        <span className="float-end">
                            <Button text="삭제" className="is-danger is-inverted"/>
                        </span>
                    </div>
                </footer>
            </div>
        }

        </>
    );
};

export default VideoCard;
