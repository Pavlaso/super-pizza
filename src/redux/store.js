import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {filters} from "./reducers/filters";
import {pizza} from "./reducers/pizzas";
import {CenterCategory} from "./reducers/CenterCategory";
import thunk from "redux-thunk";
import {cart} from "./reducers/cart";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    filters, pizza, CenterCategory, cart
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))