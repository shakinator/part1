import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import '../bootstrap.min.css'
import Rating from './Rating'

const MultiCarouselPage = (product) => {
  return (
        <MDBCarousel activeItem={1} length={3} slide={true} multiItem>
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                <div className="d-flex flex-wrap mt-3">
                  <MDBCol md="4">
                    <MDBCard >
                      <MDBCardImage className="img-fluid"
                      //src={product.images[0]}
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                      <MDBCardBody>
                        <MDBCardTitle>{product.name}Product 1</MDBCardTitle>
                        <Rating value={product.rating} />
                        <MDBCardText>
                          {/* {product.mrp}₹ */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa 
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard >
                      <MDBCardImage className="img-fluid" 
                      //src={product.images[0]}
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                      <MDBCardBody>
                      <MDBCardTitle>{product.name}Product 2</MDBCardTitle>
                        <Rating value={product.rating} />
                        <MDBCardText>
                          {/* {product.mrp}₹ */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa 
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard >
                      <MDBCardImage className="img-fluid" 
                      //src={product.images[0]}
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                      <MDBCardBody>
                      <MDBCardTitle>{product.name}Product 3</MDBCardTitle>
                        <Rating value={product.rating} />
                        <MDBCardText>
                          {/* {product.mrp}₹ */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa 
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <div className="d-flex flex-wrap mt-3">
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" 
                      //src={product.images[0]}
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                      <MDBCardBody>
                      <MDBCardTitle>{product.name}Product 4</MDBCardTitle>
                        <Rating value={product.rating} />
                        <MDBCardText>
                          {/* {product.mrp}₹ */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa 
                        </MDBCardText>
                        
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" 
                      //src={product.images[0]}
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                      <MDBCardBody>
                      <MDBCardTitle>{product.name}Product 5</MDBCardTitle>
                        <Rating value={product.rating} />
                        <MDBCardText>
                          {/* {product.mrp}₹ */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa 
                        </MDBCardText>
                        
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" 
                      //src={product.images[0]}
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                      <MDBCardBody>
                      <MDBCardTitle>{product.name}Product 6</MDBCardTitle>
                        <Rating value={product.rating} />
                        <MDBCardText>
                          {/* {product.mrp}₹ */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa 
                        </MDBCardText>
                        
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <div className="d-flex flex-wrap mt-3">
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" 
                      //src={product.images[0]}
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                      <MDBCardBody>
                      <MDBCardTitle>{product.name}Product 7</MDBCardTitle>
                        <Rating value={product.rating} />
                        <MDBCardText>
                          {/* {product.mrp}₹ */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa 
                        </MDBCardText>
                        
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" 
                      //src={product.images[0]}
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                      <MDBCardBody>
                      <MDBCardTitle>{product.name}Product 8</MDBCardTitle>
                        <Rating value={product.rating} />
                        <MDBCardText>
                          {/* {product.mrp}₹ */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa 
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard className="mb-2">
                      <MDBCardImage className="img-fluid" 
                      //src={product.images[0]}
                      src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                      <MDBCardBody>
                      <MDBCardTitle>{product.name}Product 9</MDBCardTitle>
                        <Rating value={product.rating} />
                        <MDBCardText>
                          {/* {product.mrp}₹ */}
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa 
                        </MDBCardText>
                        
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
  );
}

export default MultiCarouselPage;
