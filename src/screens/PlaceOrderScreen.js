import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import '../index.css'

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  // Calculate Pricess

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)

  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))

  cart.totalPrice = addDecimals(
    (
      Number(cart.itemsPrice) +
      Number(cart.shippingPrice) +
      Number(cart.taxPrice)
    ).toFixed(2)
  )
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderhandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
    if(cart.paymentMethod==="COD") {
      history.push('/profile')
    }
    if(cart.paymentMethod==="PayPal") {
      //history.push(`/order/${order._id}`)
    }
  }
  return (
    <div className="container page">
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={7}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h1 style={{color:"#cc1b6b"}} >Shipping</h1>
              <p>
                <strong>Address: </strong>
                 {cart.shippingAddress.address}, {cart.shippingAddress.city} 
                {cart.shippingAddress.postalcode} , {cart.shippingAddress.country} 
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h1  style={{color:"#cc1b6b"}} >Payment</h1>
              <strong>Method:</strong>{cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2  style={{color:"#cc1b6b"}} >Ordered Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2}>

                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        
                        </Col>
                        <Col>
                          <h5>Product</h5>
                          <Link to={`/product/${item.product}`} style={{fontFamily:"monospace",fontWeight:"600px",textTransform:"capitalize",color:"#cc1b6b"}} >
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={5}>
                          <h5>Price</h5>
                          {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={5}>
          <Card className="placeorderCart">
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col md={6}><h5>Total Items:</h5></Col>
                  <Col md={6}>₹{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col><h5>Shipping:</h5></Col>
                  <Col>₹{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col><h5>Tax:</h5></Col>
                  <Col>₹{cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col><h5>Grand Total:</h5></Col>
                  <Col>₹{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderhandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PlaceOrderScreen
