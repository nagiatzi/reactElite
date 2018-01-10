import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import './navbar.css';
 import '../App.css';

export default class EliteNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container>
        <div>
          <Navbar color="faded"  className="fixed-top backW" light expand="lg">
            <a className="my-brand" href="/">Elit <span className="lead">Briquettes</span></a>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#first">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/hello2">Find us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    </Container>
    );
  }
}
