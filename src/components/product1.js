import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './product.css'


class Product1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
}

toggle() {
 this.setState({
   modal: !this.state.modal
 });
}

  render() {
    return (
      <div className="content-section-a" id="first">
            <Container>
              <Row>
                <Col lg="5" className="text-center ml-auto">
                  <div>
                  <hr className="section-heading-spacer"/>
                  <h2 className="section-heading">  Biomass briquettes </h2>
                  <p class="lead">  Οι
                  <a  className="productLink" target="_blank" href="https://el.wikipedia.org/wiki/%CE%9C%CF%80%CF%81%CE%B9%CE%BA%CE%AD%CF%84%CE%B1"> μπρικέτες</a> τύπου Βιομας, αποτελούν ουσιαστικά την τελευταία λέξη της τεχνολογίας στον χώρο της παραγωγής μπρικετών. Ιδανική λύση για κάθε επαγγελματία αλλά και ιδιώτη διαθέσιμη στον χώρο σας με ένα τηλεφώνημα. <Button  onClick={this.toggle} id="pageBtn">Περισσότερα </Button></p>
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal1">
                    <ModalHeader toggle={this.toggle}>Biomass briquettes</ModalHeader>
                    <ModalBody>
                      <p>Οι μπρικέτες  βιομάς, αποτελούν ουσιαστικά την τελευταία λέξη της τεχνολογίας στον χώρο της παραγωγής μπρικετών. Ιδανική λύση για κάθε επαγγελματία αλλά και ιδιώτη διαθέσιμη στον χώρο σας με ένα τηλεφώνημα. Επιπλέον οι μπρικέτες διατίθεντε σε συσκευσίες των 10 kg. Καλέστε στο <span className="thl"> 6974419053 </span> ή στο <span className="thl"> 6944419086 </span> για άμεση παραγγελία. </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button outline color="secondary" onClick={this.toggle}>Κλείσιμο</Button>
                    </ModalFooter>
                  </Modal>
                  </div>
                </Col>
                <Col lg="5" className="ml-auto">
                  <img class="img-fluid" src={ require('../img/product1.png') } alt="μπρικέτα βιομάς Κομοτηνή"/>
                </Col>
              </Row>
            </Container>
      </div>
    );
  }
}

export default Product1;
