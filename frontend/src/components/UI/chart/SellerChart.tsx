import React, {FC} from 'react';
import Chart from "react-apexcharts";
import {sellerChartOptions} from "../../pages/mypage/seller/sellerTypes";

interface Props {
    money: number[]
    quantity: number[]
    date: any[]
}

const SellerChart: FC<Props> = ({money, quantity, date}) => {
    const data = {
        name: '결제금액',
        type: 'column',
        data: money
    }
    const data2 = {
        name: "결제건수",
        type: 'line',
        data: quantity
    }

    return (
        <>
            {
                <Chart
                    // @ts-ignore
                    options={{
                    ...sellerChartOptions.options,
                    theme: {mode: 'light'},
                    labels: date
                }}
                series={[data, data2]}
                type='line'
                height='100%'
            />}
        </>
    );
};

export default SellerChart;
