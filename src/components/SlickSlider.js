import React, { Component } from "react";
import Slider from "react-slick";
import "./../index.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default class SimpleSlider extends Component {
  render() {
    var settings;
    var width = window.innerWidth;

    if (width >= 480) {
      settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
      };
    } else {
      settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
      };
    }
    const products = this.props.product;

    return (
      <div>
        {console.log(products)}
        <h2 className="pl-2"> Category</h2>
        {products[0] === undefined ? (
          console.log("hello")
        ) : (
          <Slider {...settings}>
            {products.map((product, index) => {
              return (
                <div className="px-2 slider">
                  <Link to={`/product/${product._id}`}>
                    <img
                      className="px-1 productListImg"
                      style={{ width: "100%", height: "100%" }}
                      src={"..\\" + product.images[0]}
                    />
                  </Link>
                  <div className="cart-details">
                    <Link to={`/product/${product._id}`}>
                      <h6 className="pro-title px-sm-3 p-0 mt-2">
                        {product.name}
                      </h6>
                    </Link>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                    <div className="pro-price py-1">
                      <h5>
                        <small>
                          <s className="text-secondary">₹{product.mrp}</s>
                        </small>
                        <span>
                          ₹{" "}
                          {Math.round(
                            product.mrp -
                              (product.mrp * product.discountPrice) / 100
                          )}
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}

        {/* <Slider {...settings}>
          <div className="px-2 slider">
            <img
              src={img_1}
              style={{ height: "30vh" }}
              className="img-fluid"
              alt="Image 1"
            />
            <div className="cart-details">
              <h6 className="pro-title p-0 mt-2">Vinyl Top Folding Table</h6>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="pro-price py-2">
                <h5>
                  <small>
                    <s className="text-secondary">$125.99</s>
                  </small>
                  <span>$120</span>
                </h5>
              </div>
              <div className="cart mt-1">
                <button className="border site-btn btn-span">Add to Cart</button>
              </div>
            </div>
          </div>
        </Slider> */}
      </div>
    );
  }
}
