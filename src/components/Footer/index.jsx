import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./index.scss";
import { ReactComponent as Twitter } from "assets/img/Twitter.svg";
import { ReactComponent as Facebook } from "assets/img/Facebook.svg";

export const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container className="footer-nav">
        <Row>
          <Col className="footer-nav-col" xl={8} lg={8} md={6} xs={12}>
            <div className="footer-logo">Maya Travel</div>
            <div className="footer-location d-flex flex-column">
              <span>Derech Begin 121, Tel-Aviv</span>
              <span>+972 511177591</span>
            </div>
          </Col>
          <Col xl={4} lg={4} md={6} xs={12}>
            <Row>
              <Col className="footer-nav-item">
                <span className="footer-nav-item-header">Title</span>
                <Nav className="d-flex flex-column">
                  <Nav.Item>
                    <Nav.Link className="footer-nav-item-link">
                      Features
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="footer-nav-item-link">
                      Features
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="footer-nav-item-link">
                      Features
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col className="footer-nav-item">
                <span className="footer-nav-item-header">Title</span>
                <Nav className="d-flex flex-column">
                  <Nav.Item>
                    <Nav.Link className="footer-nav-item-link">
                      Features
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="footer-nav-item-link">
                      Features
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="footer-nav-item-link">
                      Features
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col className="footer-nav-item">
                <span className="footer-nav-item-header">Title</span>
                <Nav className="d-flex flex-column">
                  <Nav.Item>
                    <Nav.Link className="footer-nav-item-link">
                      Features
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="footer-nav-item-link">
                      Features
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="footer-nav-item-link">
                      Features
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="footer-copyright">
        <Row className="footer-copyright-wrapper">
          <Col
            className="p-0 footer-copyright-link-wrapper"
            xl={6}
            lg={6}
            md={8}
            xs={12}
          >
            <div className="footer-copyright-text">
              © 2020 Maya Travel. All Rights Reserved.
            </div>
            <Nav className="d-flex flex-row">
              <Nav.Item>
                <Nav.Link className="footer-copyright-link">
                  Terms of Service
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="footer-copyright-link">
                  Privacy Policy
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            className="p-0 footer-copyright-social-wrapper"
            xl={6}
            lg={6}
            md={4}
            xs={12}
          >
            <Nav className="d-flex flex-row justify-content-end">
              <Nav.Item>
                <Nav.Link className="footer-copyright-social p-0">
                  <Twitter></Twitter>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="footer-copyright-social p-0">
                  <Facebook></Facebook>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="footer-copyright-social p-0">
                  <Twitter></Twitter>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
