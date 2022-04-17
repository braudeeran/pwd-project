import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./productStore";
import { refReducer, RefState } from "./refStore";



const reducers = combineReducers({ productsState: productsReducer, RefState: refReducer });

const store = createStore(reducers, composeWithDevTools()); 

export default store;