import { useState, useEffect } from "react";
import { Row, Image, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";

const smallProductPrev = ({ props }) => {
  const [previewImg, setPreviewImg] = useState("");
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  useEffect(() => {
    setPreviewImg(product.images);
  }, [props]);
  return (
    <div className="previewImg">
      <Row>
        <Image src={"..\\" + previewImg} style={{height: "5px",width:"4px",border: "1px solid black",marginBottom:"5px"}} fluid />
      </Row>
      <Row className="justify-content-around">
        {product.images.map((image, index) => {
        })}
      </Row>
    </div>
  );
};
export default smallProductPrev;
