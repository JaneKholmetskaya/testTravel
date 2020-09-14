import React, { useState } from "react";
import "./index.scss";

import { ReactComponent as LocationCountry } from "assets/img/edit.svg";
import { ReactComponent as LocationCity } from "assets/img/fly.svg";
import { ReactComponent as Date } from "assets/img/calendar.svg";
import { ReactComponent as Person } from "assets/img/person.svg";
import { ReactComponent as Arrow } from "assets/img/arrow.svg";

export const CustomSelect = ({ options, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="select-container" onClick={toggling}>
      <div className="select-header">
        {img === "location-country" && <LocationCountry />}
        {img === "location-city" && <LocationCity />}
        {img === "date" && <Date />}
        {img === "person" && <Person />}
        <span>{selectedOption || options[0]}</span>
        <Arrow
          style={
            isOpen
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
          className="select-arrow"
        ></Arrow>
      </div>
      {isOpen && (
        <div className="select-list-container">
          <ul className="select-list">
            {options.map((option) => (
              <li
                className="select-list-item"
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
