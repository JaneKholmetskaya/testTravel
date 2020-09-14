import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.scss";

import { ReactComponent as Coin } from "assets/img/coin.svg";
import { ReactComponent as Heart } from "assets/img/heart.svg";
import { ReactComponent as Diamond } from "assets/img/diamond.svg";
import { ReactComponent as Sort } from "assets/img/sort.svg";
import { ReactComponent as Arrow } from "assets/img/arrow.svg";
// import { ReactComponent as Bed } from "assets/img/bed.svg";
// import { ReactComponent as Star } from "assets/img/star.svg";
// import CardPhoto from "assets/img/hotel.jpg";

export const Panel = () => {
  return (
    <Container className="panel-wrapper">
      <Row
        className="d-flex justify-content-between align-items-center
      "
      >
        <span className="panel-results">299 Results</span>
        <div className="panel-cheapest p-0">
          <div className="d-flex justify-content-center align-items-center">
            <Coin />
            <span>Cheapest</span>
            <span className="price">$204</span>
          </div>
        </div>
        <div className="panel-popular p-0">
          <div className="d-flex justify-content-center align-items-center">
            <Heart />
            <span>Most popular</span>
            <span className="price">$204</span>
          </div>
        </div>
        <div className="panel-best p-0">
          <div className="d-flex justify-content-center align-items-center">
            <Diamond />
            <span>Best Value</span>
            <span className="price">$300</span>
          </div>
        </div>
        <div className="panel-price">
          <div className="d-flex justify-content-center align-items-center">
            <Sort />
            <span>Price low to high</span>
            <Arrow />
          </div>
        </div>
      </Row>
    </Container>
  );
};
