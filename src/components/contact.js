import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'



import './product.css';

class Contact extends Component {

  render() {
    return (
      <div className="banner" id="contact">
        <div className="dark-over2">
            <Container>
              <Row>
                <Col xs={false} lg="6" className="my-auto">
                  <h2>Επικοινωνήστε μαζί μας στα τηλέφωνα: <h3><hr /><FontAwesomeIcon icon={faPhone} className="phoneIcon"/> 6970019053 <hr /> <FontAwesomeIcon icon={faHome} className="phoneIcon"/> 2031033954 </h3></h2>
                </Col>
                <Col xs={false} lg="6" className="my-auto">
                            <ul className="list-inline banner-social-buttons">
                              <li className="list-inline-item">
                                <a href="#" class="btn btn-secondary btn-lg">
                                  <FontAwesomeIcon icon={faFacebook} className="fa-fw"/>
                                <span className="network-name"> Facebook</span>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#" className="btn btn-secondary btn-lg" id="koubi2">
                                  <FontAwesomeIcon icon={faInstagram} className="fa-fw"/>
                                <span className="network-name">Instagram</span>
                              </a>
                            </li>
                          </ul>
                </Col>
              </Row>
            </Container>
        </div>
      </div>
    );
  }
}//

export default Contact;
