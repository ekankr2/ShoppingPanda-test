export const pandaSidebarItems = [
    {
        "display_name": "판다페이지",
        "route": "/panda/dashboard",
        "icon": "bx bx-category-alt"
    },
    {
        "display_name": "영상 관리",
        "route": "/panda/video",
        "icon": "bx bxs-videos"
    },
    {
        "display_name": "정산 관리",
        "route": "/panda/settlement",
        "icon": "bx bx bx-won"
    }
]

export const pandaDashboardCard = [
    {
        "link": "/panda/video",
        "icon": "bx bxs-gift",
        "count": 0,
        "title": "정산예정"
    },
    {
        "link": "/panda/settlement",
        "icon": "bx bx-won",
        "count": 0,
        "title": "정산완료"
    }
]

export const pandaChartOptions = {
    series: {
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10, 21, 42]
    },
    options: {
        colors: ['#FF4560'],
        chart: {
            background: 'transparent',
            height: '800px'
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        },
        title: {
            text: '월별 판매랑',
            align: 'center',
            style: {
                fontSize: '20px',
            }
        }
    }
}

export const dummyVideoData = [
    {
        title: "더미 짬통 비디오 제목 1 더미 짬통 비디오 제목 1",
        image: "https://user-images.githubusercontent.com/83811729/149706400-34575ef7-bfd0-457d-ab64-379b326a78dc.png"
    },
    {
        title: "더미 짬통 비디오 제목 2 더미 짬통",
        image: "https://user-images.githubusercontent.com/83811729/149706400-34575ef7-bfd0-457d-ab64-379b326a78dc.png"
    },
    {
        title: "더미 짬통 비디오 제목 3 더미 짬통 더미 짬통",
        image: "https://user-images.githubusercontent.com/83811729/149706400-34575ef7-bfd0-457d-ab64-379b326a78dc.png"
    },
    {
        title: "더미 짬통 비디오 제목 4",
        image: "https://user-images.githubusercontent.com/83811729/149706400-34575ef7-bfd0-457d-ab64-379b326a78dc.png"
    },
    {
        title: "더미 짬통 비디오 제목 5",
        image: "https://user-images.githubusercontent.com/83811729/149706400-34575ef7-bfd0-457d-ab64-379b326a78dc.png"
    },
    {
        title: "더미 짬통 비디오 제목 6",
        image: "https://user-images.githubusercontent.com/83811729/149706400-34575ef7-bfd0-457d-ab64-379b326a78dc.png"
    },
]

export const loadingVideoData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


export const pandaSettlementTable = {
    header: ["정산 일자", "정산번호", "금액", "상태"],
}
