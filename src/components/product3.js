import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './product.css'


class Product3 extends Component {
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
      <div className="content-section-a" id="third">
            <Container>
              <Row>
                <Col xs={false} lg="5" className="text-center ml-auto">
                  <div>
                  <hr className="section-heading-spacer"/>
                  <h2 className="section-heading">  Coal briquettes </h2>
                <p class="lead">  Οι Μπρικέτες Coal προορίζονται για επαγγελματική χρήση κι έχουν μεγάλη διάρκεια καύσης και αντοχή. Μπορείτε να τις προμηθευτείτε σε κουτί 10 κιλών. <Button  onClick={this.toggle} id="pageBtn2">Περισσότερα </Button></p>
                  <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal1">
                    <ModalHeader toggle={this.toggle}>Coal briquettes</ModalHeader>
                    <ModalBody>
                      <p>Οι μπρικέτες Coal, αποτελούν ουσιαστικά την τελευταία λέξη της τεχνολογίας στον χώρο της παραγωγής μπρικετών. Ιδανική λύση για κάθε επαγγελματία αλλά ιδιώτη διαθέσιμη στον χώρο σας με ένα τηλεφώνημα. Επιπλέον οι μπρικέτες διατίθεντε σε συσκευσίες των 30kg. Καλέστε στο <span className="thl"> 6974419053 </span> ή στο <span className="thl"> 6944419086 </span> για άμεση παραγγελία. </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button outline color="secondary" onClick={this.toggle}>Κλείσιμο</Button>
                    </ModalFooter>
                  </Modal>
                  </div>
                </Col>
                <Col xs={false} lg="5" className="ml-auto">
                  <img class="img-fluid" src={ require('../img/product3.png') } alt="coal briquette Komotini"/>
                </Col>
              </Row>
            </Container>
      </div>
    );
  }
}

export default Product3;
