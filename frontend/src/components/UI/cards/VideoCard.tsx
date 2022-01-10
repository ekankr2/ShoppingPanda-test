import React, {FC} from 'react';
import Button from "../Button";
import "./videoCard.css"

interface Props {
    title?: string
    image?: string
}

const VideoCard: FC<Props> = ({title, image}) => {
    return (
        <>
            <div className="card video-card">
                <div className="card-image video-card-image">
                    <figure className="image is-4by3">
                        <img src="https://img.youtube.com/vi/7HaJArMDKgI/mqdefault.jpg" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="video-title">{title}</p>
                        </div>
                    </div>

                    <div className="video-content">
                        <div>
                            <span className="video-sold">판매수 11,000회</span>
                            <span><i className="bx bx bx-won"></i>15만원</span>
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
        </>
    );
};

export default VideoCard;
