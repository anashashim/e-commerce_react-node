import axios from 'axios'
import { HOST_URL } from "../../constants";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM
} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${HOST_URL}/api/products/${id}`)
  
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      images: data.images,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
  console.log(CART_ADD_ITEM, data)
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart= (id)=> (dispatch,getState)=>{
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
