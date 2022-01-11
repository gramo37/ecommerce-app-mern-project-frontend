import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer, categoryReducer, priceFilterReducer, categoryFilterReducer } from './reducers/productReducer';

const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    category: categoryReducer,               // Reducer for getting categories from categories table in database
    price: priceFilterReducer,
    categoryFilter: categoryFilterReducer    // Reducer for category filter
})

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;