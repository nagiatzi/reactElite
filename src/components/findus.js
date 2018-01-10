import React, { Component } from 'react';
import { Container, } from 'reactstrap';
import './product.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faMap from '@fortawesome/fontawesome-free-solid/faMap';


class Findus extends Component {
  render() {
    return (
      <div className="text-center" id="findus">
        <Container>
          <h2 className="section-heading findus" id="mapHeader"> <FontAwesomeIcon icon={faMap} /> Βρείτε μας </h2>
       </Container>
    </div>
   );
 }
}

export default Findus;
