import React, {FC} from 'react';
import Chart from "react-apexcharts";
import {pandaChartOptions} from "../../pages/mypage/panda/pandaTypes";

interface Props {
    series: number[]
}

const PandaChart: FC<Props> = ({series}) => {
    const data =
        {
            name: "판매량",
            data: series
        }

    return (
        <Chart
            // @ts-ignore
            options={{
                ...pandaChartOptions.options,
                theme: {mode: 'light'}
            }}
            series={[data]}
            type='line'
            height='100%'
        />
    );
};

export default PandaChart;
