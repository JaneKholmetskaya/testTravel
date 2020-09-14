import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import "./index.scss";

import { CustomSelect } from "./CustomSelect";
import { Filter } from "./Filter";
import { Card } from "./Card";
import { Panel } from "./Panel";
import { ReactComponent as Arrow } from "assets/img/arrow.svg";

const optionsLocationCountry = ["France", "France2", "France3"];
const optionsLocationCity = ["Paris", "Paris2", "Paris3"];
const optionsDate = [
  "22/02/20 - 27/02/20",
  "14/02/20 - 21/02/20",
  "08/02/20 - 13/02/20",
];
const optionsPerson = ["2 Adults", "3 Adults", "4 Adults"];

export const Main = () => {
  return (
    <Container className="main" fluid>
      <Row className="bg-wrapper p-0 m-0 d-flex align-items-center justify-content-center">
        <img src={require("../../assets/img/bg.png")}></img>
      </Row>
      <Container fluid className="search-panel m-0">
        <Row className="search-panel-inner m-0 d-flex align-items-center justify-content-between">
          <CustomSelect
            options={optionsLocationCountry}
            img="location-country"
          />
          <CustomSelect options={optionsLocationCity} img="location-city" />
          <CustomSelect options={optionsDate} img="date" />
          <CustomSelect options={optionsPerson} img="person" />
          <Button className="search-button">Search</Button>
        </Row>
        <Row className="options-panel-options">
          <div>
            Options <Arrow />
          </div>
        </Row>
      </Container>
      <Container fluid className="main-section m-0">
        <Row>
          <Col xl={4} lg={12} md={12} className="filter-column m-0 p-0">
            <Filter />
          </Col>
          <Col xl={8} lg={12} md={12} className="main-section-card-wrapper">
            <Container className="m-0 p-0">
              <Panel />
              <Card />
              <Card />
              <Card />
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
