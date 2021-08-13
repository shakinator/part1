import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import '../index.css'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <div className="container page">
      <Row>
        <Col md={7}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant='flush'>
              {cart.cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      
                      <Image src={item.image} alt={item.name} fluid rounded />
                      
                    </Col>
                    <Col md={3}>
                      <h5>Poduct</h5>
                      <Link to={`/product/₹{item.product}`} style={{fontFamily:"monospace",fontWeight:"600px",textTransform:"capitalize",color:"#cc1b6b"}} >
                        {item.name}</Link>
                    </Col>
                    <Col md={2}><h5>Price</h5>
                      ₹{item.price}</Col>
                    <Col md={2}>
                      <h5>Qty.</h5>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <h5>Remove</h5>
                      <Button
                        type='button'
                        className="remove"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={5}>
          <Card className="cart">
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal 
                </h2>
                <h5>Total Items : {cartItems.reduce((acc, item) => acc + item.qty, 0)}</h5>
                <h5>Total Price :                 ₹
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                
                  className='btn-block'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CartScreen
