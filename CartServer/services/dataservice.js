const db=require('./db');
//get all the products from db
const getProducts = ()=>{
 return  db.product.find().then(
(result)=>{
    if (result){
        return{
            status:true,
            statusCode:200,
            products:result
        }
    }
    else{
        return{
        status:false,
        statusCode:404,
        message:'No products found'
        }
    }
}
    )
}
const addtowishlist=(id,title,price,image,description)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){

          
            return{
                status:true,
                statusCode:200,
                message:"product already exist"
            }

        }
        else{
            const newproduct= new db.Wishlist({id,title,price,image,description})
            newproduct.save()
            return{
                status:true,
                statusCode:200,
                message:'product added to wishlist'
            }
        }
    }
    )


}
const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:true,
                    statusCode:404,
                    message:" your wishlist is empty"
                }
            }
        }
    )
   }
 const  deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return db.Wishlist.find().then(
                    (result)=>{
                        if(result){
                            return{
                                status:true,
                                statusCode:200,
                                Wishlist:result,
                                message:'product removed successfully'
                            }
                        }
                        else{
                            return{
                                status:true,
                                statusCode:404,
                                message:'product not found'
                            }
                        }
                    }
                )
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'your wishlist is empty'
                }
            }
        }
    )
   }
module.exports = {
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}