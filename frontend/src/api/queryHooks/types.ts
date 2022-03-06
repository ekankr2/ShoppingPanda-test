
// buyer types
export interface RecentSituation {
    pageList: {
        num: number
        productName: string
        price: number
        orderAt: any
        status: string
    }[]
    success: boolean
    totalElement: number
    totalpage: number
}

export interface BuyerDashboard {
    readyProduct: number
    finishProduct: number
    cancelProduct: number
    cartProduct: number
}

export interface Situation {
    address: string
    allamount: number
    detailId: number
    orderDetails: []
    price: number
    products: {
        imgPath: string
        options: OptionName[]
    }[]
    productName: string
    receiver: string
    receiverPhone: string
    shipPrice: number
}

export interface OptionName {
    optionName: string
    optionCount: number
    optionPrice: number
    allAmount: number
    pandaName: string
}

// seller types
export interface SellerDashboard {
    newOrder: number
    readyOrder: number
    cancelReturn: number
    completeBuy: number
    money: number[]
    quantity: number[]
    day: any
}

// admin types
export interface AdminPandaSettlementList {
    settlePandaDetails: AdminPandaSettlementListDetails[]
    totalElement: number
    totalPage: number
}

export interface AdminPandaSettlementListDetails{
    depoistDate: string
    deposit: number
    detailIds: any
    enrollSettle: any
    id: number
    isdeposit: boolean
    pandaname: string
}

export interface AdminShopSettlementList {
    settleShopDetails: AdminPandaSettlementListDetails[]
    totalElement: number
    totalPage: number
}

export interface AdminPandaSettlementListDetails{
    depoistDate: string
    deposit: number
    detailIds: any
    enrollSettle: any
    id: number
    isdeposit: boolean
    shopName: string
}

