import img_1 from "./../Assets/01.jpg";
import img_2 from "./../Assets/02.jpg";
import { Container, Row } from "react-bootstrap";
const Banner = () => {
  return (
    <Container fluid>
      <Row className="px-0 justify-content-around">
        <div class="col-md-5 col-12 p-0  m-0">
          <img
            src={img_1}
            style={{ height: "30vh" }}
            className="img-fluid w-100"
            alt="Banner 1"
          />
        </div>
        <div class="col-md-5 col-12  p-0 m-0">
          <img
            src={img_2}
            style={{ height: "30vh" }}
            className="img-fluid w-100"
            alt="Banner 2"
          />
        </div>
      </Row>
    </Container>
  );
};
export default Banner;
