import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id
  const [name, setName] = useState('')
  const [mrp, setMrp] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(0)
  const [images, setImages] = useState('')
  const [colors, setColors] = useState('')
  const [sku, setSku] = useState('')
  const [category, setCategory] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [descriptionSmall, setDescriptionSmall] = useState('')
  const [descriptionLarge, setDescriptionLarge] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setMrp(product.mrp)
        setDiscountPrice(product.discountPrice)
        setImages(product.images)
        setCountInStock(product.countInStock)
        setColors(product.colors)
        setCategory(product.category)
        setSubCategory(product.category)
        setDescriptionSmall(product.descriptionSmall)
        setDescriptionLarge(product.descriptionLarge)
        setSku(product.sku)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const uploadFileHandler = async (e) => {
    const files = e.target.files
    const formData = new FormData()
    for (const file of files) {
      formData.append('images', file)
    }

    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImages(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    let colors = e.target[5].value.split(',')
    colors = colors.map((color) => color.toLowerCase())
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name: name.toLowerCase(),
        mrp,
        discountPrice,
        images,
        colors,
        category: category.toLowerCase(),
        subCategory: subCategory.toLowerCase(),
        descriptionSmall: descriptionSmall.toLowerCase(),
        descriptionLarge: descriptionLarge.toLowerCase(),
        sku,
        countInStock,
      })
    )
  }

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='mrp'>
              <Form.Label>MRP</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Price'
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='discountPrice'>
              <Form.Label>Discount %</Form.Label>
              <Form.Control
                type='number'
                min='0'
                max='99'
                placeholder='Enter In Percent'
                value={discountPrice}
                onChange={(e) => setDiscountPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='images'>
              <Form.Label>Images</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Image Url'
                value={[...images]}
                onChange={(e) => setImages(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                name='images'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
                multiple
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='colors'>
              <Form.Label>Available Colors</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Colors with comma saperated'
                value={colors}
                onChange={(e) => setColors(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='sku'>
              <Form.Label>SKU</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter SKU digts only'
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Kids Ladies or Gents'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='subCategory'>
              <Form.Label>Sub Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Topwear,Bottomwear,footwear,accessories'
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='descriptionSmall'>
              <Form.Label>Small Description</Form.Label>
              <Form.Control
                type='text'
                minLength='60'
                maxLength='80'
                placeholder='Enter Description'
                value={descriptionSmall}
                onChange={(e) => setDescriptionSmall(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='descriptionLarge'>
              <Form.Label>Large Description</Form.Label>
              <Form.Control
                type='text'
                minLength='120'
                maxLength='160'
                placeholder='Enter Description'
                value={descriptionLarge}
                onChange={(e) => setDescriptionLarge(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
