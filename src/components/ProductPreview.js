import { useState, useEffect } from "react";
import { Row, Image, Col } from "react-bootstrap";
import "../index.css";

const ProductPreview = ({ props }) => {
  const images = props;
  const [previewImg, setPreviewImg] = useState("");
  console.log(images);
  useEffect(() => {
    setPreviewImg(images[0]);
  }, [props]);
  return (
    <div className="previewImg">
      <Row>
        <Image src={"..\\" + previewImg} style={{ height: "400px",width:"65%",justifyContent: "center",border: "1px solid"}} fluid />
      </Row>
      <Row className="justify-content-around">
        {images.map((image, index) => {
        })}
      </Row>
    </div>
  );
};
export default ProductPreview;
