import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="moto py-5 text-white" id="moto">
          <div className="dark-overlay">
            <Container>
              <Row>
                <Col className="text-center">
                  <h1 class="display-3"> Εδώ και αρκετά χρόνια στην Κομοτηνή και όχι μόνο,</h1>
                  <p class="lead"> σας παραδίδουμε προϊόντα υψηλής ποιότητας στις καλύτερες τιμές.</p>
                </Col>
              </Row>
            </Container>
         </div>
      </div>
    );
  }
}

export default Banner;
