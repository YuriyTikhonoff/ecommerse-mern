import express from 'express'
import asyncHandler from 'express-async-handler'
import { getProducts, getProductById} from '../controllers/productController.js'

const router = express.Router()

//@desc     Fetch all products
//@route    Get /api/products
//@access   Public

//router.get('/', getProducts)   This code we're gonna replace with more proficient code below
router.route('/').get(getProducts)



//@desc     Fetch specific product
//@route    Get /api/products/:id 
//@access   Public 

router.route('/:id').get(getProductById)

export default router

