export const buyerSidebarItems = [
    {
        "display_name": "마이페이지",
        "route": "/buyer/mypage",
        "icon": "bx bx-category-alt"
    },
    {
        "display_name": "주문 / 배송",
        "route": "/buyer/orderList",
        "icon": "bx bx-package"
    },
    {
        "display_name": "취소 / 반품",
        "route": "/buyer/cancelList",
        "icon": "bx bx bx-x-circle"
    },
    {
        "display_name": "찜 목록",
        "route": "/buyer/orders",
        "icon": "bx bx-heart"
    },
    {
        "display_name": "장바구니",
        "route": "/buyer/cart",
        "icon": "bx bx-cart"
    },
    {
        "display_name": "문의 내역",
        "route": "/categories",
        "icon": "bx bx-message-dots"
    },
    {
        "display_name": "설정",
        "route": "/discount",
        "icon": "bx bx-cog"
    }
]

export const dashboardCard = [
    {
        "link": "/orderList",
        "icon": "bx bxs-truck",
        "count": "0",
        "title": "배송중"
    },
    {
        "link": "/orderList",
        "icon": "bx bx-package",
        "count": "0",
        "title": "배송 완료"
    },
    {
        "link": "/",
        "icon": "bx bx-x-circle",
        "count": "0",
        "title": "취소 / 반품"
    },
    {
        "link": "/cart",
        "icon": "bx bx-cart",
        "count": "0",
        "title": "장바구니"
    }
]

export const latestOrders = {
    header: [
        "주문 번호",
        "상품명",
        "가격",
        "주문 일자",
        "상태"
    ],
    headerMobile: [
        "상품명",
        "상태"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "완료"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "배송중"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "취소중"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "배송중"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "반품"
        },
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "완료"
        },
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "완료"
        },
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "완료"
        }
    ]
}

