import asyncHandler from 'express-async-handler'

import Order from '../models/orderModel.js'

// @desc Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    console.log(req.user)

    const { user, orderItems, totalPrice } = req.body
    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order items')
        return
    }else{
        console.log(req)
        const order = new Order({
            user:user._id,
            orderItems,
            totalPrice
        })
        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
})

// @desc get logged in user orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders  = await Order.find({user: req.params.id}).sort({_id:-1}) 
    res.json(orders)
})

 // @desc get order by id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
    const order  = await Order.findById(req.params.id).populate('user','name email')
    if(order){
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order Not found')
    }
    
})
export { addOrderItems, getMyOrders, getOrderById }