//integration ||||||||

const express = require('express')
const cors = require('cors')

const dataservice = require('./services/dataservice')


const app =express()
//to parse JSON
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))



//api to get all products

app.get('/all-products',(req,res)=>{
    dataservice.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/addtowishlist',(req,res)=>{
    dataservice.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})
app.get('/getWishlist',(req,res)=>{
    dataservice.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
}
)
app.delete('/deletewish/:id',(req,res)=>{
    dataservice.deletewish(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})