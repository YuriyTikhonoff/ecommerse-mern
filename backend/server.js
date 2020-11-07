import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMidleware.js'

dotenv.config()

connectDB()


const app = express()

app.use((req, res, next) => {
    console.log('This is a result of working middleware')
    next()
})




app.use('/api/products', productRoutes)



app.get('/', (req, res) => { 
    res.send('Api is running')
})

// app.get('/api/products', (req, res) => { 
//     res.json(products)
// })

// app.get('/api/products/:id', (req, res) => { 
//     const product = products.find(p => p._id === req.params.id)
//     res.json(product)
// })


app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))