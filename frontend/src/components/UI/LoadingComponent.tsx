import React, {FC} from 'react';
import ReactLoading from "react-loading";

interface Props {
    type?: LoadingType
    color: string
    height?: string | number
    width?: string | number
}

type LoadingType = "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";

const LoadingComponent: FC<Props> = ({type, color, height, width}) => {
    return (
        <div className="loader-wrapper">
            <ReactLoading type={type} color={color} height={height} width={width}/>
        </div>
    );
};

export default LoadingComponent;
