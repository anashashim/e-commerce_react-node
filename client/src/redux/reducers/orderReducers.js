import { 
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_DETAILS_REQUEST, 
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_SUCCESS,
    ORDER_LIST_MY_FAIL, 
    ORDER_LIST_MY_SUCCESS, 
    ORDER_LIST_MY_REQUEST, 
    ORDER_LIST_MY_RESET
} from "../constants/orderConstants";

export const CreateOrderReducers = (state = {} , action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading : true,
            }
        case ORDER_CREATE_SUCCESS:
            return {
                loading : false,
                success: true,
                order: action.payload
            }
        case ORDER_CREATE_FAIL :
            return{
                loading : false,
                error : action.payload,

            }
        default:
            return state
    }
}
export const OrderDetailsreducer = (state = {loading : true,orderItems : [],shippingAddress: {}} , action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading : true,
            }
        case ORDER_DETAILS_SUCCESS:
            return {
                loading : false,
                order: action.payload
            }
        case ORDER_DETAILS_FAIL :
            return{
                loading : false,
                error : action.payload,

            }
        default:
            return state
    }
}
export const OrderListMyreducer = (state = {orders : []} , action) => {
    switch (action.type) {
        case ORDER_LIST_MY_REQUEST:
            return {
                loading : true,
            }
        case ORDER_LIST_MY_SUCCESS:
            return {
                loading : false,
                orders : action.payload
            }
        case ORDER_LIST_MY_FAIL :
            return{
                loading : false,
                error : action.payload,
            }
        case ORDER_LIST_MY_RESET :
            return{orders : []}    
        default:
            return state
    }
}