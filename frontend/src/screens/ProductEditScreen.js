import axios from 'axios'
import * as React from 'react'
import Select from 'react-select'
import '../index.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ProductEditScreen = ({ match, history }) => {
  const colours = [
    { label: 'RED', value: 'RED' },
    { label: 'BLUE', value: 'BLUE' },
    { label: 'BLACK', value: 'BLACK' },
    { label: 'PINK', value: 'PINK' },
    { label: 'VIOLET', value: 'VIOLET' },
    { label: 'SILVER', value: 'SILVER' },
    { label: 'GOLDEN', value: 'GOLDEN' },
  ]
  const category = [
    { label: 'Categorie1', value: 'Categorie1' },
    { label: 'Categorie2', value: 'Categorie2' },
    { label: 'Categorie3', value: 'Categorie3' },
    { label: 'Categorie4', value: 'Categorie4' },
    { label: 'Categorie5', value: 'Categorie5' },
  ]

  const productId = match.params.id
  const [name, setName] = useState('')
  const [mrp, setMrp] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(0)
  const [images, setImages] = useState('')
  const [colors, setColors] = useState('')
  const [sku, setSku] = useState('')
  const [categories, setCategories] = useState('')
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
        setCategories(product.categories)
        setDescriptionSmall(product.descriptionSmall)
        setDescriptionLarge(product.descriptionLarge)
        setSku(product.sku)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])


  const uploadFileHandler = async (e) => {
    const selectedFiles = e.target.files
    const formData = new FormData()
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('images', selectedFiles[i], selectedFiles[i].name)
      }

      setUploading(true)

      try {
        const config = {
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
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
  }
  //images 
  var c = images.toString()
  console.log(c)
  const submitHandler = (e) => {
    if(successUpdate){
      history.push('/admin/productlist')
    }
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name: name,
        mrp,
        discountPrice,
        images:c,
        colors,
        category: categories,
        //subCategory: subCategory.toLowerCase(),
        descriptionSmall: descriptionSmall.toLowerCase(),
        descriptionLarge: descriptionLarge.toLowerCase(),
        sku,
        countInStock,
      })
    )
  }
  const set = []
  const set2 = []

  const handleChange = (selectedOption) => {
    for (let i = 0; i < selectedOption.length; i++) {
      set.push(Object.values(selectedOption[i])[0])
    }
    console.log(set)
    setColors(set)
    console.log(selectedOption)
  }
  //categories

  const changeCategories = (selectedOption1) => {

    for (let j = 0; j < selectedOption1.length; j++) {
      set2.push(Object.values(selectedOption1[j])[1])
    }
    let uniqueChars = [...new Set(set2)];
    console.log(uniqueChars)
    setCategories(uniqueChars)
    console.log(selectedOption1)
  }
  return (
    <div className='container page'>
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
              <Select
                options={colours}
                isMulti
                onChange={handleChange}
                autoFocus='false'
              />
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
              <Select
                options={category} 
                isMulti
                onChange={changeCategories}
                autoFocus='false'
              />
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
    </div>
  )
}

export default ProductEditScreen
