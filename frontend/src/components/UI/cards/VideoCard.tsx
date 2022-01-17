import React, {FC} from 'react';
import Button from "../Button";
import "./videoCard.css"

interface Props {
    title?: string
    link: string
}

function linkFormatter(link: string) {
    return link.substring(32, 43)
}

function videoImageMaker(link: string) :string {
    let videoLink = `https://img.youtube.com/vi/${link}/0.jpg`
    return videoLink
}

const VideoCard: FC<Props> = ({title, link}) => {
    return (
        <>
            <div className="card video-card">
                <div className="card-image video-card-image">
                    <figure className="image is-4by3">
                        <img src={videoImageMaker(linkFormatter(link))} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <a className="video-title" target="_blank" href={link}>{title}</a>
                        </div>
                    </div>

                    {/*<div className="video-content">*/}
                    {/*    <div>*/}
                    {/*        <span className="video-sold">판매수 11,000회</span>*/}
                    {/*        <span><i className="bx bx bx-won"></i>15만원</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
        </>
    );
};

export default VideoCard;
