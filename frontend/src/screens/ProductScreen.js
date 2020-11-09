import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Button, Image, ListGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'





const ProductScreen = ({ match }) => {
    // const [ product, setProduct ] = useState({})
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, product, error } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
        // const fetchProduct = async () => {
        //     const { data } = await axios.get(`/api/products/${match.params.id}`)
        //     console.log(match.params.id)
        //     console.log(data)
        //     setProduct(data)
        // }
        //fetchProduct()
    }, [dispatch, match] )


    return (
        <>
            <Link to='/' className="btn btn-light">Go back</Link>
            { loading 
            ? <Loader /> 
            : error
            ? <Message variant='danger'>{error}</Message>
            : (<Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                </Col>
                                    <Col>
                                        <strong>
                                            ${product.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                   </Col>
                                    <Col>
                                        <strong>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                    Add to cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            )    
        }
            
        </>
    )
}

export default ProductScreen
