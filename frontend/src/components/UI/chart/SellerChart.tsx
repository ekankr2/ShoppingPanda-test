import React, {FC, useEffect, useState} from 'react';
import Chart from "react-apexcharts";
import {sellerChartOptions} from "../../pages/mypage/seller/sellerTypes";

interface Props {
    money: number[]
    quantity: number[]
}

const SellerChart: FC<Props> = ({money, quantity}) => {

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
                options={{
                    ...sellerChartOptions.options,
                    theme: {mode: 'light'}
                }}
                series={[data, data2]}
                type='line'
                height='100%'
            />}
        </>
    );
};

export default SellerChart;
