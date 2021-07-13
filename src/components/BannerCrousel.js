import img_1 from "./../Assets/1.jpg";
import img_2 from "./../Assets/2.jpg";
import img_3 from "./../Assets/3.jpg";
import img_4 from "./../Assets/4.jpg";
import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, Button } from
"mdbreact";



const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={4}
      slide={true}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      style={{height:"100%",width:"100%"}}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={img_1}
               style={{width:"100%",height:"100%"}}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive carouselText" style={{fontWeight:"bold"}}>First Product</h3>
            <Button className="btn-carousel">click me </Button>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
        <MDBView>
            <img
              className="d-block w-100"
              src={img_2}
              style={{width:"100%",height:"100%"}}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive carouselText" style={{fontWeight:"bold"}}>Second Product</h3>
            <Button variant="primary" className="btn-carousel">click me </Button>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={img_3}
              style={{width:"100%",height:"100%"}}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive carouselText" style={{fontWeight:"bold"}}>Third Product</h3>
            <Button variant="primary" className="btn-carousel">click me </Button>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src={img_4}
               style={{width:"100%",height:"100%"}}
              alt="Fourth slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive carouselText" style={{fontWeight:"bold"}}>Fourth Product</h3>
            <Button variant="primary" className="btn-carousel">click me </Button>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;
