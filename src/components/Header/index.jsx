import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./index.scss";

import { CustomSelect } from "./CustomSelect";

const optionsLanguage = ["En", "En", "En"];
const optionsСurrency = ["Usd", "Usd", "Usd"];

export const Header = () => {
  return (
    <Container fluid className="header sticky-top">
      <Container className="header-nav">
        <Row>
          <Col className="logo-col" xl={2} lg={2} md={3}>
            <div className="logo">LOGO</div>
          </Col>
          <Col className="nav-col" xl={8} lg={6} md={5}>
            <Nav>
              <Nav.Item>
                <Nav.Link className="header-link">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="header-link">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="header-link">Contact </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            xl={1}
            lg={2}
            md={2}
            xs={6}
            className="d-flex align-items-center justify-content-between"
          >
            <CustomSelect options={optionsLanguage} img="language" />
          </Col>
          <Col
            xl={1}
            lg={2}
            md={2}
            xs={6}
            className="d-flex align-items-center justify-content-between"
          >
            <CustomSelect options={optionsСurrency} img="currency" />
          </Col>
        </Row>
      </Container>
      <Container className="header-contacts">
        <Row>
          <Col className="header-contacts-wrapper" xl={12}>
            <div>
              <span>Business name here</span>
              <div className="separator"></div>
              <span>Slogan here</span>
            </div>
            <div>
              <div className="separator"></div>
              <a href="tel:0541234567">054-1234567</a>
              <div className="separator"></div>
              <a href="mailto:myemail@gmail.com">myemail@gmail.com</a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
