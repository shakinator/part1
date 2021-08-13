import { Carousel } from "react-bootstrap";
import banner from "./../Assets/banner.jpg";
import img_1 from "./../Assets/3.jpg";
import img_2 from "./../Assets/4.jpg";
const HomeCarousel = () => {
  const bannerImg = [img_1, img_2];

  return (
    <Carousel className="crouselBanner " style={{ maxHeight: "50vh" }}>
      {bannerImg.map((banner) => (
        <Carousel.Item style={{ width: "100%",objectFit:"fit",height:"40vh" }}>
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

export default HomeCarousel;
