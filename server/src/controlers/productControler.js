import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const Cg = req.query.Cg
    const filter = req.query.filter
    const from = req.query.from
    const to = req.query.to
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

    }
    else if(filter){
        switch (filter) {
            case 'date':
                const productsbydate =  await Product.find({}).sort('createdAt').exec();
                res.json(productsbydate)
                    break;
            case 'highprice':
                const productsbyhighprice =  await Product.find({}).sort('price');
                res.json(productsbyhighprice)

                    break;
            case 'lowprice':
                const productsbylowprice =  await Product.find({}).sort('-price').exec();
                res.json(productsbylowprice)
                    break;
        
            default:
                break;
        }
    }else if(from && to){
        const productbyprice =  await Product.find({price:{$lte:to},price:{$gte:from}});
        res.json(productbyprice)

    }else{
        const products =  await Product.find({...keyword});
        res.json(products)
    }
})

export {
    getProducts
}