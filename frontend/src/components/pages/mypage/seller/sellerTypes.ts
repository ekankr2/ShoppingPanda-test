export const sellerSidebarItems = [
    {
        "display_name": "판매자페이지",
        "route": "/seller/dashboard",
        "icon": "bx bx-category-alt"
    },
    {
        "display_name": "상품 관리",
        "route": "/seller/product",
        "icon": "bx bxs-videos"
    },
    {
        "display_name": "판매 관리",
        "route": "/seller/",
        "icon": "bx bx bx-purchase-tag"
    },
    {
        "display_name": "정산 관리",
        "route": "/seller/settlement",
        "icon": "bx bx bx-won"
    }
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
        "icon": "bx bxs-package",
        "count": 0,
        "title": "배송완료"
    },
    {
        "link": "/seller/settlement",
        "icon": "bx bx-error-alt",
        "count": 0,
        "title": "취소 / 반품"
    }
]

export const chartOptions = {
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
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
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
    {label: '정산예정일', value: 'planned'},
    {label: '정산기준일', value: 'settled'},
    {label: '세금신고기준일', value: 'taxed'},
]

export const settlementSearchByStatus = [
    {label: '전체', value: 'all'},
    {label: '일반 정산', value: 'normal'},
    {label: '정산 후 취소', value: 'canceledAfter'},
    {label: '정산 전 취소', value: 'canceledBefore'},
    {label: '빠른정산', value: 'fastSettlement'},
]


export const loadingVideoData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
