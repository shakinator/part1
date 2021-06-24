import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  console.log(product);
  return (
    // <Card className="my-3 p-3 rounded">
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img src={product.images[0]} style={{}} variant="top" />
    //   </Link>
    //   <Card.Body>
    //     <Link to={`/product/${product._id}`}>
    //       <Card.Title as="div">
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>
    //     <Card.Text as="div">
    //       <Rating
    //         value={product.rating}
    //         text={`${product.numReviews} reviews`}
    //       />
    //     </Card.Text>

    //     <Card.Text as="h3">{product.mrp}₹</Card.Text>
    //   </Card.Body>
    // </Card>
    <Row className="text-center justify-content-around">
      <Link to={`/product/${product._id}`}>
        <img
          className="px-1 productListImg"
          style={{ width: "100%", height: "100%" }}
          src={"..\\" + product.images[0]}
        />
      </Link>
      <div class="cart-details">
        <Link to={`/product/${product._id}`}>
          <h6 className="pro-title px-2 p-0 mt-2">{product.name}</h6>
        </Link>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <div class="pro-price py-1">
          <h5 className="text-center">
            <small>
              <s class="text-secondary text-center">₹{product.mrp}</s>
            </small>
            <span>
              ₹{" "}
              {Math.round(
                product.mrp - (product.mrp * product.discountPrice) / 100
              )}
            </span>
          </h5>
        </div>
      </div>
    </Row>
  );
};

export default Product;
