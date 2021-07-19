import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import '../index.css'
import BannerCrousel from '../components/BannerCrousel'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';



const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
    <BannerCrousel />
    <div className="container page">
      <br />
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" style={{display:"flex"}}>
          Home
        </Link>
        <Link color="inherit" href="/" style={{display:"flex"}}>
          <WhatshotIcon style={{marginRight: "theme.spacing(0.5)",width:"20",height:"20"}} />
          Products
        </Link>
        <Link color="inherit" href="/" style={{display:"flex"}}>
          <GrainIcon style={{marginRight: "theme.spacing(0.5)",width:"20",height:"20"}} />
          Profile
        </Link>
      </Breadcrumbs>
      
      <Meta />
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </div>
    </>
  )
}

export default HomeScreen
