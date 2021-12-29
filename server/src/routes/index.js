import express from 'express'
const router = express.Router()
import { authUser } from '../controlers/userControler.js';
import { getProducts, getProductById } from '../controlers/productControler.js';

router.post('/login', authUser);
router.route('/products').get(getProducts);
router.route('/products/:id').get(getProductById);

export default router