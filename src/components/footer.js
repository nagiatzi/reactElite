import React, { Component } from 'react';
import { Container, } from 'reactstrap';
import './footer.css'


class Footer extends Component {
  render() {
    return (
      <div className="myfooter" id="footerid">
        <Container>
          <ul clasNames="list-inline d-flex justify-content-center">
          <li className="list-inline-item">
              <a href="#moto">Αρχική</a>
          </li>
          <li className="footer-menu-divider list-inline-item">&sdot;</li>
          <li className="list-inline-item">
             <a href="#first">Προϊόντα </a>
          </li>
          <li className="footer-menu-divider list-inline-item">&sdot;</li>
           <li className="list-inline-item">
            <a href="#contact"> Επικοινωνία </a>
          </li>
        </ul>
        <p class="copyright text-muted small d-flex justify-content-center">Copyright &copy; Επιχείρηση εμπορίας μπρικετών Elit. All Rights Reserved</p>
      </Container>
    </div>
   );
 }
}

export default Footer;
