import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import img_1 from "./../Assets/1.jpg";
import img_2 from "./../Assets/2.jpg";
import img_3 from "./../Assets/3.jpg";


const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

class DemoV4 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    return (
      <div  style={{ paddingBottom: 20 }}>
        <Row>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              leftIcon={this.state.leftIcon}
              rightIcon={this.state.rightIcon}
              onSelect={this._onSelect}
              ref={this.slider}
              version={4}
            >
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%",objectFit:"cover" }}
                  src={img_1}
                />
                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ }}>
                <div className="carousel-caption">Video</div>
                <img
                  style={{ width: "100%", height: "100%",objectFit:"cover" }}
                  src={img_2}
                />
              </div>
              <div style={{ ...styles, backgroundColor: "lightpink" }}>
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <span>text</span>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                </div>
                <div className="carousel-caption">Youtube</div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DemoV4;