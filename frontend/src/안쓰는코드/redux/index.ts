import { createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";
import sellerReducer from "./reducers/sellerReducer";
import buyerReducer from "./reducers/buyerReducer";
import pageReducer from "./reducers/pageReducer";
import pandaReducer from "./reducers/pandaReducer";


const rootReducer = combineReducers({
    page: pageReducer,
    auth: authReducer,
    buyer: buyerReducer,
    panda: pandaReducer,
    seller: sellerReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>

export default store
