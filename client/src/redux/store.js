import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer } from './reducers/userReducer';
import { productListReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    productList: productListReducer,
    cart: cartReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse
    (localStorage.getItem('userInfo')) : null;
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse
    (localStorage.getItem('cartItems')) : [];

const initialState = {
    cart :{cartItems: cartItemsFromStorage},
    userLogin: { userInfo : userInfoFromStorage },
}

const middelware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware))
)

export default store