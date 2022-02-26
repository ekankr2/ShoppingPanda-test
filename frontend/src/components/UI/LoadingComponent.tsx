import React, {FC} from 'react';
import ReactLoading from "react-loading";

interface Props {
    type?: LoadingType
    height?: string | number
    width?: string | number
}

type LoadingType = "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";

const LoadingComponent: FC<Props> = ({type, height, width}) => {
    return (
        <div className="component-loader-wrapper">
            <ReactLoading type={type} color={"#00d1b2"} height={height} width={width}/>
        </div>
    );
};

export default LoadingComponent;
