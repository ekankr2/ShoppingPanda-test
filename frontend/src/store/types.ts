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
export const FETCH_PANDA_VIDEO_LIST = 'FETCH_PANDA_VIDEO_LIST'
// seller
export const FETCH_SELLER_DASHBOARD = 'FETCH_SELLER_DASHBOARD'
export const FETCH_SELLER_SETTLEMENT_LIST = 'FETCH_SELLER_SETTLEMENT_LIST'
export const FETCH_SELLER_PRODUCT_LIST = 'FETCH_SELLER_PRODUCT_LIST'

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
    loggedIn: boolean
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
    salse: number[]
    expect: number
    finish: number
}

export interface PandaSettlementList {
    expectMoney: number
    finMoney: number
    pandaDashboardDtoList: any
}

export interface PandaSettlement {

}

interface VideoDetails{
    link: string
    panda: string
    pandaId: number
}

export interface PandaVideoList {
    details: VideoDetails[]
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
    pandaVideoList: PandaVideoList | null
}

// panda action
interface FetchPandaDashboardAction {
    type: typeof FETCH_PANDA_DASHBOARD
    payload: PandaDashboard
}

interface FetchPandaSettlementListAction {
    type: typeof FETCH_PANDA_SETTLEMENT_LIST
    payload: PandaSettlementList
}

interface FetchPandaSettlementAction {
    type: typeof FETCH_PANDA_SETTLEMENT
    payload: PandaSettlement
}

interface FetchPandaVideoListAction {
    type: typeof FETCH_PANDA_VIDEO_LIST
    payload: PandaVideoList
}

export type PandaMyPageAction =
    FetchPandaDashboardAction
    | FetchPandaSettlementListAction
    | FetchPandaSettlementAction
    | FetchPandaVideoListAction

// seller types
export interface SellerDashboard {
    newOrder: number
    readyOrder: number
    cancelReturn: number
    completeBuy: number
    money: number[]
    quantity: number[]
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

export interface SellerSettlementList {
    finMoney: number
    expectMoney: number
    shopDashboardDtoTypeList: {
        id: number
        beforeSalePrice: number
        settlePrice: number
        salesDate: any
        confirmDate: any
        expectDate: any
        depositCompleted: any
        paymentStatus: any
    }
}

export interface SellerMyPageState {
    sellerDashboard: SellerDashboard | null
    sellerProductList: SellerProductList | null
    sellerSettlementList: SellerSettlementList | null
}

export interface SellerSettlementRequestData {
    searchDateMode?: string
    startDate?: any
    endDate?: any
    searchStatus?: string
    orderId?: string | number
}

//seller actions
interface fetchSellerDashboardAction {
    type: typeof FETCH_SELLER_DASHBOARD
    payload: SellerDashboard
}

interface fetchSellerSettlementListAction {
    type: typeof FETCH_SELLER_SETTLEMENT_LIST
    payload: SellerSettlementList
}

export type SellerMyPageAction = fetchSellerDashboardAction | fetchSellerSettlementListAction



