import React from "react";
import {
  Container,
  Row,
  Form,
  InputGroup,
  FormControl,
  Col,
} from "react-bootstrap";
import '../index.css';


const Footer = () => {
  return (
    <footer
      className="pt-4"
      style={{ backgroundColor: "black", fontSize: "14px" }}
    >
      <Container fluid className="pt-4 pb-3 ">
        <Row className="border-bottom">
          <Col md="5">
            <h5 className="text-white ">About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit optio amet ab temporibus asperiores quasi
              cupiditate. Voluptatum ducimus voluptates voluptas?
            </p>
          </Col>
          <Col md="3">
            <h5 className="text-white ">Subscribe</h5>
            <Form className="rounded ">
              <InputGroup className="mb-3 ">
                <FormControl
                  placeholder="Recipient's email"
                  aria-label="Recipient's email"
                  aria-describedby="basic-addon2"
                  className="email"
                />
                <InputGroup.Append className="">
                  <InputGroup.Text id="basic-addon2" className="btn-danger subscribe">
                    Subscribe
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
          <Col md="2">
            <h5 className="text-white ">Contact Info</h5>
            <p>Address</p>
            <p>123,STREET NAME,CITY,NY</p>
          </Col>
          <Col md="2">
            <h5 className="text-white ">Phone</h5>
            <p>Toll free :1800-000-000</p>
            <h5 className="text-white ">Email</h5>
            <p>noreply@gmail.com</p>
          </Col>
        </Row>
        <Row className="mt-5 border-bottom">
          <Col md="4">
            <h5 className="text-white">MY ACCOUNT</h5>
            <Row>
              <Col>
                <p>About US</p>
                <p>Contact Us</p>
                <p>My Account</p>
              </Col>
              <Col>
                <p>Order History</p>
                <p>Advanced Search</p>
                <p>Login</p>
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <h5 className="text-white">FEATURED</h5>
            <Row>
              <Col>
                <p>Men</p>
                <p>Women</p>
                <p>Boys</p>
                <p>Girls</p>
              </Col>
              <Col>
                <p>New Arrivals</p>
                <p>Shoes</p>
                <p>Clothes</p>
                <p>Accesories</p>
              </Col>
            </Row>
          </Col>
          <Col md="4  text-center">
            <h5 className="text-white pb-5">FOLLOW US</h5>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: "30px" }}
                >
                  <i class="fab fa-facebook social"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: "30px" }}
                >
                  <i class="fab fa-instagram social"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: "30px" }}
                >
                  <i class="fab fa-linkedin-in social"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: "30px" }}
                >
                  <i class="fab fa-twitter social"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center py-3">
            <>
              <h5>Edelie Ecommerce &copy; Sarvacharya 2021</h5>
            <ul className="bttn ">
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: "30px" }}
                >
                  <i class="fab fa-paypal bttn"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: "30px" }}
                >
	                <i class="fab fa-cc-visa"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: "30px" }}
                >
	                <i class="fab fa-cc-visa"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn-floating btn-sm text-white"
                  style={{ fontSize: "30px" }}
                >
	                <i class="fab fa-cc-stripe"></i>
                </a>
              </li>
            </ul>
            </>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
