import asyncHandler from 'express-async-handler'

import Order from '../models/orderModel.js'

// @desc Create new order
// @route POST /api/orders
// @access Private
const addorderitems = asyncHandler(async (req, res) => {
    console.log(req.user)

    const {orderItems,shippingAddress,paymentMethod,itemsPrice,taxPrice,shippingPrice,totalPrice} = req.body
    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order items')
        return
    }else{
        const order = new Order({
            user:req.user._id,
            orderItems,

            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })
        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

// @desc get logged in user orders
// @route GET /api/orders/myorders
// @access Private
const GetMyOrders = asyncHandler(async (req, res) => {
    const orders  = await Order.find({user: req.user._id})
    res.json(orders)
})

export {addorderitems, GetMyOrders}