export const SET_USER = 'SET_USER'
export const SIGN_OUT = 'SIGN_OUt'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const NEED_VERIFICATION = 'NEED_VERIFICATION'
export const SET_SUCCESS = 'SET_SUCCESS'
export const SET_SUBMITTED = 'SET_SUBMITTED'

export const FETCH_DASHBOARD = 'FETCH_DASHBOARD'

// Page State
export interface PageState {
    loading: boolean
    error: string
    success: string
    submitted: boolean
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

export type PageAction = SetLoadingAction | SetErrorAction | SetSuccessAction | setSubmittedAction

// Auth Types
export interface User {
    firstName: string
    email: string
    id: string
    createdAt: any
}

export interface AuthState {
    user: User | null
    authenticated: boolean
    needVerification: boolean
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

export type AuthAction =
    SetUserAction
    | SetLoadingAction
    | SignOutAction
    | SetErrorAction
    | NeedVerificationAction
    | SetSuccessAction;

//dashboard types
export interface Dashboard {
    success: string
    readyProduct: number
    finishProduct: number
    cancelProduct: number
    cartProduct: number
}

export interface SituationList {
    pageList: {
        num: number
        productName: string[]
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
    dashboard: Dashboard
    situationList: SituationList
    situationDetail: Situation
}
