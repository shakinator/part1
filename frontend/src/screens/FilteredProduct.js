import React from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { Image } from 'react-bootstrap'
import '../index.css';
import { Link } from 'react-router-dom';
import SingleBanner from "../components/SingleBanner";
import RecomendSlider from "../components/RecomendSlider";
import Rating from "../components/Rating";

function FilteredProduct() {
    const productList = useSelector((state) => state.productList)
    const {products } = productList
    

    
    const productDetails = useSelector((state) => state.productDetails);
    const {  product } = productDetails;

    return (
        <>
        <div className="container">
            {/* 
            {products.map((product) => (
            <div className='checkoutProduct'>
                <Link to={`/product/${product._id}`}>
                    <img src=//{product.image}
                    "https://th.bing.com/th/id/OIP.xpMiFJkMSeD88pP2ML6ORwHaE8?pid=ImgDet&rs=1"  className='checkoutProduct__image' />
                </Link>    
                <div className='checkoutProduct__info'>
                    <p  className='checkouProduct__title'>Product 1</p>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                    {product.description} 
                        </p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>10000</strong>
                    </p>
                    <Rating
                    value={product.rating}
                    text={` ${product.numReviews} reviews`}
                    />
                </div>
            </div>
            ))}
            */}
            <div className='checkoutProduct'>
                <Link
                // to={`/product`}
                >
                    
                    <Image  
                    src={
                        //{product.image}
                        "https://th.bing.com/th/id/OIP.xpMiFJkMSeD88pP2ML6ORwHaE8?pid=ImgDet&rs=1"}
                    className="mx-auto"
                    rounded />
                </Link>    
                <div className='checkoutProduct__info'>
                    <p  className='checkouProduct__title'>Product 1
                    {/*{product.name} */}
                    </p>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        {/*{product.description} */}
                        </p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>10000
                            {/*{product.mrp}*/}
                            </strong>
                    </p>
                    <Rating
                    value={product.rating}
                    text={` ${product.numReviews} reviews`}
                    />
                </div>
            </div>
            <div className='checkoutProduct'>
                <Link
                 //to={`/product`}
                 >
                    <img src=//{product.image}
                    "https://th.bing.com/th/id/OIP.xpMiFJkMSeD88pP2ML6ORwHaE8?pid=ImgDet&rs=1"  className='checkoutProduct__image' />
                </Link>    
                <div className='checkoutProduct__info'>
                    <p  className='checkouProduct__title'>Product 1</p>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        {/*{product.description} */}
                        </p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>10000</strong>
                    </p>
                    <Rating
                    value={product.rating}
                    text={` ${product.numReviews} reviews`}
                    />
                </div>
            </div>
            <div className='checkoutProduct'>
                <Link 
                //to={`/product/${product._id}`}
                >
                    <img src=//{product.image}
                    "https://th.bing.com/th/id/OIP.xpMiFJkMSeD88pP2ML6ORwHaE8?pid=ImgDet&rs=1"  className='checkoutProduct__image' />
                </Link>    
                <div className='checkoutProduct__info'>
                    <p  className='checkouProduct__title'>Product 1</p>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas
                        {/*{product.description} */}
                        </p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>10000</strong>
                    </p>
                    <Rating
                    value={product.rating}
                    text={` ${product.numReviews} reviews`}
                    />
                </div>
            </div>
        </div>
        <RecomendSlider product={products} />
        <br />
        <SingleBanner />
        </>
    )
};

export default FilteredProduct;
