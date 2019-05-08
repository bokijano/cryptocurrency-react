import React, { Component } from "react";
import { Image, Navbar, Nav, Container } from "react-bootstrap";
import Currency from "./currency.jpg";

class CustomNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="xs" bg="light" variant="light" fixed="top">
          <Navbar.Brand
            style={{ color: "dodgerblue", fontSize: "30px" }}
            className="fontFour"
          >
            Cryptocurrencies
          </Navbar.Brand>
          <Nav className="navbar-head mr-auto">Check your coins!</Nav>
          <Nav>
            <Image
              className="cart-main"
              src={Currency}
              alt="currency"
              rounded
              fluid
            />
            <span className="counter">{this.props.ownCurrency.length}</span>
            <p className="cart-heading">check amount</p>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default CustomNavbar;
