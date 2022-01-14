
export const SET_USER = 'SET_USER'
export const SIGN_OUT = 'SIGN_OUt'
export const LOGIN_CHECK = 'LOGIN_CHECK'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const NEED_VERIFICATION = 'NEED_VERIFICATION'
export const SET_SUCCESS = 'SET_SUCCESS'
export const SET_SUBMITTED = 'SET_SUBMITTED'
export const SET_MODE = 'SET_MODE'
// buyer
export const FETCH_BUYER_DASHBOARD = 'FETCH_BUYER_DASHBOARD'
export const FETCH_BUYER_SITUATION_LIST = 'FETCH_BUYER_SITUATION_LIST'
export const FETCH_BUYER_SITUATION = 'FETCH_BUYER_SITUATION'
// panda
export const FETCH_PANDA_DASHBOARD = 'FETCH_PANDA_DASHBOARD'
export const FETCH_PANDA_SETTLEMENT_LIST = 'FETCH_PANDA_SETTLEMENT_LIST'
export const FETCH_PANDA_SETTLEMENT = 'FETCH_PANDA_SETTLEMENT'

// Page State
export interface PageState {
    loading: boolean
    error: string
    success: string
    submitted: boolean
    mode: string
}

// Page Actions
interface SetLoadingAction {
    type: typeof SET_LOADING
    payload: boolean
}

interface SetSuccessAction {
    type: typeof SET_SUCCESS
    payload: string
}

interface SetErrorAction {
    type: typeof SET_ERROR
    payload: string
}

interface setSubmittedAction {
    type: typeof SET_SUBMITTED
    payload: boolean
}

interface setModeAction {
    type: typeof SET_MODE
    payload: string
}

export type PageAction = SetLoadingAction | SetErrorAction | SetSuccessAction | setSubmittedAction | setModeAction

// Auth Types
export interface User {
    firstName: string
    email: string
    id: string
    createdAt: any
}

export interface AuthState {
    user: User | null
    needVerification: boolean
    loggedIn : boolean
}

export interface SignUpData {
    firstName: string
    email: string
    password: string
}

export interface SignInData {
    account: string
    password: string
}

// Auth Actions
interface SetUserAction {
    type: typeof SET_USER
    payload: User
}


interface SignOutAction {
    type: typeof SIGN_OUT
}

interface NeedVerificationAction {
    type: typeof NEED_VERIFICATION
}

interface LoginCheckAction {
    type: typeof LOGIN_CHECK
    payload: boolean
}

export type AuthAction =
    SetUserAction
    | SignOutAction
    | NeedVerificationAction
    | LoginCheckAction

//dashboard types
export interface BuyerDashboard {
    readyProduct: number
    finishProduct: number
    cancelProduct: number
    cartProduct: number
}

export interface SituationList {
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

export interface BuyerMyPageState {
    buyerDashboard: BuyerDashboard | null
    buyerSituationList: SituationList | null
    buyerSituationDetail: Situation | null
}

interface FetchBuyerDashboardAction {
    type: typeof FETCH_BUYER_DASHBOARD
    payload: BuyerDashboard
}

interface FetchBuyerSituationListAction {
    type: typeof FETCH_BUYER_SITUATION_LIST
    payload: SituationList
}

interface FetchBuyerSituationAction {
    type: typeof FETCH_BUYER_SITUATION
    payload: Situation
}

export type BuyerMyPageAction =
    FetchBuyerDashboardAction | FetchBuyerSituationListAction | FetchBuyerSituationAction

//panda types
export interface PandaDashboard {
    readyProduct: number
    finishProduct: number
    cancelProduct: number
    cartProduct: number
}

export interface PandaSettlementList {
    expectedMoney: number
    finMoney: number
    pandaDashboardDtoList: any
}

export interface PandaSettlement {

}

export interface PandaSettlementRequestData {
    startDate: any
    endDate: any
    searchStatus: string
}

export interface PandaMyPageState {
    pandaDashboard: PandaDashboard | null
    pandaSettlementList: PandaSettlementList | null
    pandaSettlement: PandaSettlement | null
}
// panda action
export interface FetchPandaDashboardAction {
    type: typeof FETCH_PANDA_DASHBOARD
    payload: PandaDashboard
}

export interface FetchPandaSettlementListAction {
    type: typeof FETCH_PANDA_SETTLEMENT_LIST
    payload: PandaSettlementList
}

export interface FetchPandaSettlementAction {
    type: typeof FETCH_PANDA_SETTLEMENT
    payload: PandaSettlement
}

export type PandaMyPageAction = FetchPandaDashboardAction | FetchPandaSettlementListAction | FetchPandaSettlementAction

// seller types
export interface SellerDashboard {
    newOrderNum: number
    checkedOrderNum: number
    shipCompleteNum: number
    canceledOrderNum: number
    paymentAmount: number[]
    paymentCount: number[]
}

export interface SellerProductList {
    amount: number
    fullprice: number
    orders: any
    orderuser: string
    orderuserPhone: string
    pureamount: number
    receiverAddress: string
    receiverName: string
    receiverPhone: string
    receiverZipCode: string
    shipprice: number
    userOrderId: number
}

export interface SellerMyPageState {
    sellerDashboard: SellerDashboard | null
    sellerProductList: SellerProductList | null
}



