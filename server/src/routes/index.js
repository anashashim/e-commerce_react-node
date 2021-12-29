import express from 'express'
const router = express.Router()
import { authUser } from '../controlers/userControler.js';
import { getProducts, getProductById } from '../controlers/productControler.js';
import { addOrderItems, getMyOrders, getOrderById } from '../controlers/orderControler.js';

router.post('/login', authUser);
router.route('/products').get(getProducts);
router.route('/products/:id').get(getProductById);
router.route('/orders').post(addOrderItems);
router.route('/orders/myorders/:id').get(getMyOrders);
router.route('/orders/:id').get(getOrderById);

export default router