import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";

import { Header } from "components/Header";
import { Main } from "components/Main";
import { Footer } from "components/Footer";

export const Page = () => {
  return (
    <Container className="page-layout" xl>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
