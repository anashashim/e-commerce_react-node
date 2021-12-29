import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const Cg = req.query.Cg;
    const filter = req.query.filter;
    const search = req.query.search;
    const keyword = req.query.keyword ? {
        name : {
            $regex : req.query.keyword,
            $options : 'i'
        }
    } : {}
    
    console.log(req.query.keyword)

    if(Cg){
        const products =  await Product.find({category : Cg});
        res.json(products)

    } else if(search){
        const productsBySearch = await Product.find({ $text: { $search: search, $diacriticSensitive:true } });
        res.json(productsBySearch)
    }
    else if(filter){
        switch (filter) {
            case 'date':
                const productsbydate =  await Product.find({}).sort('createdAt').exec();
                res.json(productsbydate)
                    break;
            case 'highprice':
                const productsbyhighprice =  await Product.find({});
                const productByHigh = productsbyhighprice.sort((a, b)=> b.price - a.price)
                res.json(productByHigh)

                    break;
            case 'lowprice':
                const productsbylowprice = await Product.find({});
                const productsbylow= productsbylowprice.sort((a, b)=> a.price - b.price)
                res.json(productsbylow)
                    break;
            default:
                break;
        }
    }else{
        const products =  await Product.find({...keyword});
        res.json(products)
    }
})

// @desc Fetch single  product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
    const product =  await Product.findById(req.params.id)
    if(product){
        res.json(product)
    } else{
        // status it's 500 by default cuz of errHandler
        res.status(404)
        throw new Error('Product not found')
    }
})

export {
    getProducts,
    getProductById
}