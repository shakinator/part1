import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import '../index.css'
import size from '../Assets/size.png'

class SizeChart extends Component {
    state = {
        modal: false
      };
    
      toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }
      render() {
        return (
          <MDBContainer>
            {/* BUTTON */}
            <MDBBtn className="sizeBtn"   onClick={this.toggle}>Size</MDBBtn>
            {/* MODAL */}
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}   size="fluid"  fullHeight  position="top">
              <MDBModalBody>
                  <img src={size} style={{width:"100%",height:"100%"}} ></img>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn style={{backgroundColor:"#757575",color:"black"}} onClick={this.toggle}>Close</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        );
      }
    }
export default SizeChart;
