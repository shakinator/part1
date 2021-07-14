import img_2 from "./../Assets/02.jpg";
import { Container, Row } from "react-bootstrap";
import "../index.css"
const SingleBanner2 = () => {
  return (
    <Container fluid>
      <Row className="px-0 justify-content-around banner">
        <div class="col-md-5 col-12 p-0 col-lg-12 m-0">
          <img
            src={img_2}
            style={{ height: "30vh",width:"100%" }}
            className="img-fluid"
            alt="Banner 1"
          />
        </div>
      </Row>
    </Container>
  );
};
export default SingleBanner2;