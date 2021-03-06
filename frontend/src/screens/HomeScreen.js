import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'



const HomeScreen = () => {
    //We're gonna replace hook useState with Redux, that's why we discarded the request from DB from this component
    //const [ products, setProducts] = useState([]) 

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [listProducts])

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    return (
        <>
            <h1>Latest products</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Row>
                            { products.map(product => (
                                <Col sm={12} md={6} lg={4} xl={3} key={product._id} >
                                    <Product product={product}></Product>
                                </Col>
                            )
                            )}
                        </Row>
                    )

            }

        </>
    )
}

export default HomeScreen
