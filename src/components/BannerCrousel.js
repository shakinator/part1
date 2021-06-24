import { Carousel } from "react-bootstrap";
import banner from "./../Assets/banner.jpg";
import img_1 from "./../Assets/01.jpg";
import img_2 from "./../Assets/02.jpg";
const BannerCrousel = () => {
  const bannerImg = [img_1, img_2, img_1, img_2];

  return (
    <Carousel className="crouselBanner " style={{ maxHeight: "50vh" }}>
      {bannerImg.map((banner) => (
        <Carousel.Item style={{ maxHeight: "50vh", width: "100%" }}>
          <img
            className="d-block w-100"
            style={{ height: "100%" }}
            src={banner}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCrousel;
