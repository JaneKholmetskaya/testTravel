import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.scss";
import { DoubleRangeSlider } from "./DoubleRange";
import { Slider } from "@material-ui/core";

import { ReactComponent as Coin } from "assets/img/coin.svg";
import { ReactComponent as Star } from "assets/img/star.svg";
import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { ReactComponent as Search } from "assets/img/search.svg";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <Container className="filter-wrapper">
      <Row className="filter-header d-flex justify-content-between">
        <span>Filter Results</span>
        <button className="filter-header-clear">
          <Coin />
          <span>CLEAR</span>
        </button>
      </Row>
      <Row className="filter-container d-flex flex-column">
        <div className="filter-container-header">Star Rating</div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>1 Star (15)</span>
              <div>
                <Star className="star" />
                <Star className="star gray" />
                <Star className="star gray" />
                <Star className="star gray" />
                <Star className="star gray" />
                <span className="price">$170</span>
              </div>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>2 Star (15)</span>
              <div>
                <Star className="star" />
                <Star className="star" />
                <Star className="star gray" />
                <Star className="star gray" />
                <Star className="star gray" />
                <span className="price">$170</span>
              </div>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>3 Star (15)</span>
              <div>
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star gray" />
                <Star className="star gray" />
                <span className="price">$170</span>
              </div>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>4 Star (15)</span>
              <div>
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star gray" />
                <span className="price">$170</span>
              </div>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>5 Star (15)</span>
              <div>
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <Star className="star" />
                <span className="price">$170</span>
              </div>
            </div>
          </label>
        </div>
      </Row>
      <Row className="filter-container d-flex flex-column">
        <div className="filter-container-header">Price Range Per Person</div>
        <div className="filter-container-item">
          <div className="filter-container-item-content d-flex flex-row justify-content-between">
            <span className="range-price">300$</span>
            <span className="range-price">1000$</span>
          </div>
          <div className="filter-search-wrapper">
            <Slider
              aria-labelledby="track-inverted-range-slider"
              // getAriaValueText={valuetext}
              defaultValue={[20, 37]}
            />
          </div>
        </div>
      </Row>
      <Row className="filter-container d-flex flex-column">
        <div className="filter-container-header">Board type</div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>Room only</span>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>Bed and breakfast</span>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>Lorem ipsum</span>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>Lorem ipsum</span>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>Lorem ipsum</span>
            </div>
          </label>
        </div>
      </Row>
      <Row className="filter-container d-flex flex-column">
        <div className="filter-container-header">Board type</div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>Lorem ipsum</span>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>Lorem ipsum</span>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>Lorem ipsum</span>
            </div>
          </label>
        </div>
        <div className="filter-container-item">
          <label class="checkbox-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div className="filter-container-item-content d-flex flex-row justify-content-between">
              <span>Lorem ipsum</span>
            </div>
          </label>
        </div>

        <div className="show-more-button" onClick={toggling}>
          <Arrow style={isOpen ? { transform: "rotate(180deg)" } : {}} />
          <span>{!isOpen ? "Show more" : "Hide"}</span>
        </div>

        {isOpen && (
          <>
            <div className="filter-container-item">
              <label class="checkbox-container">
                <input type="checkbox" />
                <span class="checkmark"></span>
                <div className="filter-container-item-content d-flex flex-row justify-content-between">
                  <span>Lorem ipsum</span>
                </div>
              </label>
            </div>
            <div className="filter-container-item">
              <label class="checkbox-container">
                <input type="checkbox" />
                <span class="checkmark"></span>
                <div className="filter-container-item-content d-flex flex-row justify-content-between">
                  <span>Lorem ipsum</span>
                </div>
              </label>
            </div>
            <div className="filter-container-item">
              <label class="checkbox-container">
                <input type="checkbox" />
                <span class="checkmark"></span>
                <div className="filter-container-item-content d-flex flex-row justify-content-between">
                  <span>Lorem ipsum</span>
                </div>
              </label>
            </div>
          </>
        )}
      </Row>
      <Row className="filter-container d-flex flex-column">
        <div className="filter-container-header">Search hotel</div>
        <div className="filter-container-item">
          <div className="filter-search-wrapper">
            <input
              className="filter-search-input"
              placeholder="Hotel name"
            ></input>
            <Search className="filter-search-icon" />
          </div>
        </div>
      </Row>
    </Container>
  );
};
