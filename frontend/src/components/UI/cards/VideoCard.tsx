import React, {FC} from 'react';
import Button from "../Button";

interface Props {
    title?: string
    image?: string
}

const VideoCard: FC<Props> = ({title, image}) => {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://wallpapercave.com/wp/wp3269246.jpg" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                        </div>
                    </div>
                </div>

                <footer className="card-footer has-background-white">
                    <div style={{width:"100%"}}>
                        <span className="float-start">
                            <Button text="수정" className="is-info is-light"/>
                        </span>
                        <span className="float-end">
                            <Button text="삭제" className="is-danger is-light"/>
                        </span>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default VideoCard;
