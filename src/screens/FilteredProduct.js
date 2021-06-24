import React from 'react'
import { useDispatch , useSelector} from 'react-redux';
import '../index.css';

function FilteredProduct() {
    const productList = useSelector((state) => state.productList)
    const { loading, error, products, pages, page } = productList
    return (
        <div className="container">
            <div className='checkoutProduct'>
                <img src="https://th.bing.com/th/id/OIP.xpMiFJkMSeD88pP2ML6ORwHaE8?pid=ImgDet&rs=1"  className='checkoutProduct__image' />
                <div className='checkoutProduct__info'>
                    <p  className='checkouProduct__title'>Product 1</p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>10000</strong>
                    </p>
                </div>
            </div>
            <div className='checkoutProduct'>
                <img src="https://th.bing.com/th/id/OIP.xpMiFJkMSeD88pP2ML6ORwHaE8?pid=ImgDet&rs=1"  className='checkoutProduct__image' />
                <div className='checkoutProduct__info'>
                    <p  className='checkouProduct__title'>Product 1</p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>10000</strong>
                    </p>
                </div>
            </div>
            <div className='checkoutProduct'>
                <img src="https://th.bing.com/th/id/OIP.xpMiFJkMSeD88pP2ML6ORwHaE8?pid=ImgDet&rs=1"  className='checkoutProduct__image' />
                <div className='checkoutProduct__info'>
                    <p  className='checkouProduct__title'>Product 1</p>
                    <p className='checkoutProduct__price'>
                        <small>$</small>
                        <strong>10000</strong>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default FilteredProduct;
