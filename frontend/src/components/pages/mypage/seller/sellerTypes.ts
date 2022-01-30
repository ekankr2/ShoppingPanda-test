export const sellerSidebarItems = [
    {
        display_name: "판매자페이지",
        route: "/seller/dashboard",
        icon: "bx bx-category-alt",
    },
    {
        display_name: "신규주문",
        route: "/seller/newOrder",
        icon: "bx bx-task",
    },
    {
        display_name: "배송중인 주문",
        route: "/seller/shippingOrder",
        icon: "bx bx-package",
    },
    {
        display_name: "취소/반품주문",
        route: "/seller/cancelReturnOrder",
        icon: "bx bx-task-x",
    },
    {
        display_name: "완료된 주문",
        route: "/seller/finishOrder",
        icon: "bx bx-package",
    },
    {
        display_name: "상품 관리",
        route: "/seller/product",
        icon: "bx bx-store",
    },
    {
        display_name: "판매 관리",
        route: "/seller/",
        icon: "bx bx bx-purchase-tag",
    },
    {
        display_name: "정산 관리",
        route: "/seller/settlement",
        icon: "bx bx bx-won",
    },
]

export const sellerDashboardCard = [
    {
        "link": "/seller/video",
        "icon": "bx bx-shopping-bag",
        "count": 0,
        "title": "신규주문"
    },
    {
        "link": "/seller/settlement",
        "icon": "bx bx-package",
        "count": 0,
        "title": "배송준비"
    },
    {
        "link": "/seller/settlement",
        "icon": "bx bx-error-alt",
        "count": 0,
        "title": "취소 / 반품"
    },
    {
        "link": "/seller/settlement",
        "icon": "bx bxs-package",
        "count": 0,
        "title": "완료주문"
    }
]

export const sellerChartOptions = {
    series: [{
        name: '결제금액',
        type: 'column',
        data: [55000, 62000, 24000, 12000, 66000, 86000, 124000, 89000, 23000, 55000, 45000, 95000]
    }, {
        name: '결제건수',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent',
            height: '800px'
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1]
        },
        labels: [1,2,3,4,5,6,7,8,9,10,11],
        stroke: {
            width: [0, 4]
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: [{}, {
            opposite: true,
        }],
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

export const dummyVideoData = [
    {
        title: "더미 짬통 비디오 제목 1 더미 짬통 비디오 제목 1",
        image: "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        title: "더미 짬통 비디오 제목 2 더미 짬통",
        image: "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        title: "더미 짬통 비디오 제목 3 더미 짬통 더미 짬통",
        image: "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        title: "더미 짬통 비디오 제목 4",
        image: "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        title: "더미 짬통 비디오 제목 5",
        image: "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        title: "더미 짬통 비디오 제목 6",
        image: "https://bulma.io/images/placeholders/1280x960.png"
    },
]

export const settlementSearchByDate = [
    {label: '정산일자', value: '정산일자'},
    {label: '정산예정일', value: '정산예정일'},
    {label: '판매일자', value: '판매일자'},
    {label: '구매확정일자', value: '구매확정일자'},
]

export const settlementSearchByStatus = [
    {label: '전체', value: 'all'}
]

export const sellerSettlementTable = {
    header: ["입금액", "정산금액", "수수료", "판매일", "구매확정일", "정산예상일", "정산상태"],
}


export const loadingVideoData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
