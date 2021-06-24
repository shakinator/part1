import React, { Component } from "react";
import Slider from "react-slick";
// import img_1 from "./../Assets/01.jpg";
// import img_2 from "./../Assets/02.jpg";
import "./../index.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default class RecomendSlider extends Component {
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
        <h2 className="pl-2"> You Might Also Like This </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis</p>
        {products[0] == undefined ? (
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
                  <div class="cart-details">
                    <Link to={`/product/${product._id}`}>
                      <h6 className="pro-title px-sm-3 p-0 mt-2">
                        {product.name}
                      </h6>
                    </Link>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                    <div class="pro-price py-1">
                      <h5>
                        <small>
                          <s class="text-secondary">₹{product.mrp}</s>
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
      </div>
    );
  }
}
