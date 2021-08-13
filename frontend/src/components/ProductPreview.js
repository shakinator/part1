import { useState, useEffect } from 'react'
import { Row, Image, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../index.css'

const ProductPreview = ({ props }) => {
  const [previewImg, setPreviewImg] = useState('')
  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails
  useEffect(() => {
    setPreviewImg(product.images)
  }, [props])
  return (
    <div className='previewImg'>
      <Row>
        <Image
          src={'..\\' + previewImg}
          style={{
            display: 'flex',
            height: '500px',
            width: '400px',
            border: '1px solid',
            alignItem: 'flex-start',
            marginBottom: '10px',
          }}
          fluid
        />
      </Row>
      <Row className='justify-content-around'>
        {product.images.map((image, index) => ['images'])}
      </Row>
    </div>
  )
}
export default ProductPreview
