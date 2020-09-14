import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.scss";

import { ReactComponent as Moon } from "assets/img/moon.svg";
import { ReactComponent as Bed } from "assets/img/bed.svg";
import { ReactComponent as Star } from "assets/img/star.svg";
import CardPhoto from "assets/img/hotel.jpg";

export const Card = ({ info }) => {
  const [isOpenAdditional, setIsOpenAdditional] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const togglingAdditional = () => setIsOpenAdditional(!isOpenAdditional);

  // const onOptionClicked = (value) => () => {
  //   setSelectedOption(value);
  //   setIsOpen(false);
  // };

  return (
    <div className="card-wrapper d-flex flex-column">
      <div className="card-preview">
        <div className="card-photo d-flex justify-content-center align-items-center">
          <img src={CardPhoto} alt="" />
        </div>
        <div className="card-info">
          <span className="card-info-title d-flex flex-row align-items-center">
            <span>Town house residence by Brown Hotels</span>
            <div className="separator"></div>
            <div className="card-info-rate">
              <span>4</span>
              <Star />
            </div>
          </span>
          <span className="card-info-description">
            <span>10 Avenue d'Iéna, 75116 Paris, +33 1 53 67 19 98</span>
          </span>
          <div className="card-info-date">
            <span>20/02/20 | 8:00 - 27/02/20 | 11:00</span>
          </div>
          <div className="card-more-info d-flex flex-row align-items-center">
            <div className="card-more-info-item">
              <Moon />
              <span>7 nights</span>
            </div>
            <div className="card-more-info-item">
              <Bed />
              <span>All inclusive</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-deal container-fluid d-flex flex-row align-items-end justify-content-between">
        <div className="card-deal-left">
          <span>Only 3 spots left</span>
        </div>
        <div className="card-deal-wrapper d-flex flex-row align-items-end">
          <div className="card-deal-per-one d-flex flex-column align-items-end">
            <span className="card-deal-per-one-price">$645</span>
            <span className="card-deal-per-one-text">Avg price per person</span>
          </div>
          <div className="card-deal-total d-flex flex-column align-items-end">
            <span className="card-deal-total-price">$1290</span>
            <span className="card-deal-total-text">
              Total price for 2 adults
            </span>
          </div>
          <div className="btn-wrapper">
            <button className="card-deal-view-deal-main">View Deal</button>
            <button className="card-deal-view-deal-more"></button>
          </div>
        </div>
      </div>
      <div
        className="card-additional container-fluid d-flex flex-row align-items-center justify-content-center"
        onMouseDown={togglingAdditional}
      >
        <span>Additional packages with this hotel</span>
      </div>
      {isOpenAdditional && (
        <div className="card-additional-info container-fluid m-0 p-0">
          <div className="card-additional-info-item container-fluid m-0 d-flex flex-row align-items-end justify-content-between">
            <div className="card-info-date m-0">
              <span>20/02/20 | 8:00 - 27/02/20 | 11:00</span>
            </div>
            <div className="card-more-info-item">
              <Moon />
              <span>7 nights</span>
            </div>
            <div className="card-deal-total d-flex flex-column align-items-end m-0 ">
              <span className="card-deal-total-price">$1290</span>
              <span className="card-deal-total-text">
                Total price for 2 adults
              </span>
            </div>
            <button className="card-additional-info-item-button">Select</button>
          </div>
          <div className="card-additional-info-item container-fluid m-0 d-flex flex-row align-items-end justify-content-between">
            <div className="card-info-date m-0">
              <span>20/02/20 | 8:00 - 27/02/20 | 11:00</span>
            </div>
            <div className="card-more-info-item">
              <Moon />
              <span>7 nights</span>
            </div>
            <div className="card-deal-total d-flex flex-column align-items-end m-0 ">
              <span className="card-deal-total-price">$1290</span>
              <span className="card-deal-total-text">
                Total price for 2 adults
              </span>
            </div>
            <button className="card-additional-info-item-button">Select</button>
          </div>
          <div className="card-additional-info-item container-fluid m-0 d-flex flex-row align-items-end justify-content-between">
            <div className="card-info-date m-0">
              <span>20/02/20 | 8:00 - 27/02/20 | 11:00</span>
            </div>
            <div className="card-more-info-item">
              <Moon />
              <span>7 nights</span>
            </div>
            <div className="card-deal-total d-flex flex-column align-items-end m-0 ">
              <span className="card-deal-total-price">$1290</span>
              <span className="card-deal-total-text">
                Total price for 2 adults
              </span>
            </div>
            <button className="card-additional-info-item-button">Select</button>
          </div>
        </div>
      )}
    </div>
  );
};
