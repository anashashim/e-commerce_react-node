import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../constants/productConstants.js';
import { HOST_URL } from "../../constants";

export const listProducts =  (keyword = '') => async(dispatch) => {
    try {
        dispatch({type : PRODUCT_LIST_REQUEST})
        const { data }  = await axios.get(`${HOST_URL}/api/products?keyword=${keyword}`)
        
        dispatch({
            type : PRODUCT_LIST_SUCCESS,
            payload : data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:  error.response && error.response.data.message
                ? error.response.data.message 
                : error.message,
            })
    }
}

export const ListproductbyCg = (Cg) => async (dispatch) =>{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`${HOST_URL}/api/products/?Cg=${Cg}`)
        dispatch({type : PRODUCT_LIST_SUCCESS , payload : data})
        console.log(data)
        } catch (error) {
            dispatch({type : PRODUCT_LIST_FAIL , 
                      payload : error.response && error.response.data.message 
                      ? error.response.data.message : error.message, })     
    }
}

export const Listproductbyfiter = (filter) => async (dispatch) =>{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`${HOST_URL}/api/products/?filter=${filter}`)
        dispatch({type : PRODUCT_LIST_SUCCESS , payload : data})
        console.log(data)
        } catch (error) {
            dispatch({type : PRODUCT_LIST_FAIL , 
                      payload : error.response && error.response.data.message 
                      ? error.response.data.message : error.message, }) 
    }
}

export const Listproductbysearch = (filter) => async (dispatch) =>{
    try {
        dispatch({type : PRODUCT_LIST_REQUEST })
        const {data} = await axios.get(`${HOST_URL}/api/products/?search=${filter}`)
        dispatch({type : PRODUCT_LIST_SUCCESS , payload : data})
        console.log(data)
        } catch (error) {
            dispatch({type : PRODUCT_LIST_FAIL , 
                      payload : error.response && error.response.data.message 
                      ? error.response.data.message : error.message, }) 
    }
}
