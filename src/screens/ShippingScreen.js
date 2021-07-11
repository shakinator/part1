import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import Select from 'react-select'

const ShippingScreen = ({ history }) => {
  const countries = [
    { label: 'India', value: 'India' },
    { label: 'United States', value: 'United States' },
    { label: 'United Kingdom', value: 'United Kingdom' },
  ]
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)
  const [landmark, setLandmark] = useState(shippingAddress.landmark)

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }
  const Country = (selectedOption1) => {
    console.log(selectedOption1)
    var x =Object.values(selectedOption1)[1]
    setCountry(x)
    console.log(country)
    console.log(x)
  }
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1 style={{color:"#cc1b6b"}}>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Enter an Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group controlId='Landmark '>
          <Form.Label>Add a Landmark</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Landmark'
            value={landmark}
            required
            onChange={(e) => setLandmark(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label> Enter Your City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Enter Your Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Choose Your Country</Form.Label>
          <Select
            options={countries} 
            onChange={Country}
            autoFocus='false'
          />
        </Form.Group>

        <Button type='submit' variant='primary' className="btn-block">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
