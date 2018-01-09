import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faHome from '@fortawesome/fontawesome-free-solid/faHome'
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
                <Col xs={false} lg="5" className="ml-auto">
                </Col>
              </Row>
            </Container>
        </div>
      </div>
    );
  }
}//

export default Contact;
