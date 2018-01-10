import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './product.css'


class Product2 extends Component {

  render() {
    return (
      <div className="content-section-b" id="second">
            <Container>
              <Row>
                <Col xs={false} lg="5" className="text-center mr-auto order-lg-2">
                  <div>
                    <hr className="section-heading-spacer"/>
                    <h2 className="section-heading">  Charcoal briquettes </h2>
                    <p class="lead"> Πρόκειται για μπρικέτα μεγάλης θερμογόνου δύναμης και διάρκειας. Απευθείνεται σε επαγγελματίες και αποτελεί την ιδανικότερη επιλογή για σούβλες. Βγαίνει  σε καλέμια από 15cm και πάνω. Μπορείτε να την προμηθευτείτε σε κουτί 10 κιλών. </p>
                  </div>
                </Col>
                <Col xs={false} lg="5" className="ml-auto">
                  <img class="img-fluid" src={ require('../img/product2.png') } alt="Charcoal briquette Komotini"/>
                </Col>
              </Row>
            </Container>
      </div>
    );
  }
}

export default Product2;
