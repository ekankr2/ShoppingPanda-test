export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_SUCCESS = 'SET_SUCCESS'
export const SET_SUBMITTED = 'SET_SUBMITTED'

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

