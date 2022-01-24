import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productDetailsReducers, productListReducers } from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
    producList: productListReducers,
    productDetails: productDetailsReducers
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;