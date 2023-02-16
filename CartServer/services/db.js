// import mongoose

const mongoose = require('mongoose');
//define connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to database');
})

//model creation
const product = mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})

const Wishlist= mongoose.model('wishlist',{
    id:Number,
    title:String,
    price:String,
    description:String,
    image:String
})


//4.export 


module.exports={
product,
Wishlist
}