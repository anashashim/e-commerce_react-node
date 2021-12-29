import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name:{
        type : String,
        required: true,
        text: true,
        index: true
    },
    image:{
        type : String,
    },
    description:{
        type : String,
        required: false,
        text: true,
        index: true
    },
    category:[{
        type : String,
        required: true,
        text: true,
        index: true
    }],
    price:{
        type : Number,
        required: true,
        default: 0
    }
},{
    timestamps: true
}) 

const Product = mongoose.model('Product', productSchema)  

export default Product