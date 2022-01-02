import { createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import pageReducer from "./reducers/pageReducer";
import authReducer from "./reducers/authReducer";
import buyerReducer from "./reducers/mypageReducers/buyerReducer";

const rootReducer = combineReducers({
    page: pageReducer,
    auth: authReducer,
    buyer: buyerReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>

export default store
