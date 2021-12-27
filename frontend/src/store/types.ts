export const SET_USER = 'SET_USER'
export const SIGN_OUT = 'SIGN_OUt'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const NEED_VERIFICATION = 'NEED_VERIFICATION'
export const SET_SUCCESS = 'SET_SUCCESS'
export const SET_SUBMITTED = 'SET_SUBMITTED'
export const ADD_CART = 'ADD_CART'
export const FETCH_CART_LIST = 'FETCH_CART_LIST'
export const DELETE_CART = 'DELETE_CART'

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

export type AuthAction = SetUserAction | SetLoadingAction | SignOutAction | SetErrorAction | NeedVerificationAction | SetSuccessAction;

//cart types
interface CartOption {
    optionId: number
    optionCount: number
    originPrice: number
    optionName: string
    detailedId: number
    pandaName: null | string
}

interface CartProduct {
    productId: number
    productName: string
    thumbNail: string
    do: CartOption
}

export interface Cart {
    shopId: number
    shopName: string
    freePrice: number
    shipPrice: number
    dp: CartProduct
}

export interface CartState {
    cartItems: Cart[]
}

interface AddCart {
    type: typeof ADD_CART
    payload: Cart
}

interface FetchCartList {
    type: typeof FETCH_CART_LIST
    payload: Cart[]
}

interface DeleteCart {
    type: typeof DELETE_CART
    payload: Cart
}

export type CartAction = AddCart | FetchCartList | DeleteCart
