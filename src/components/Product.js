import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import "../index.css";
import ModalImage from "react-modal-image";

const Product = ({ product }) => {
  return (
    <Card>
      {/* on click the image it will open the modal image */}
        <ModalImage  small={product.images[0]}
        className="cardImage"
        large="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg" 
        />
      <Card.Body style={{display: 'inline'}}>
      <strong style={{color:"gray"}}>
        Category
        {/*{product.category}
        */}
      </strong>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <h5>{product.name}</h5>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
          />
        </Card.Text>
        <Card.Text as='h3'>{product.mrp}₹</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
