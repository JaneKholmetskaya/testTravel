import React, { useState } from "react";
import "./index.scss";
import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import { ReactComponent as Language } from "assets/img/country.svg";
import { ReactComponent as Currency } from "assets/img/euro.svg";

export const CustomSelect = ({ options, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown-container">
      <div className="custom-dropdown-header" onClick={toggling}>
        {img === "language" && <Language />}
        {img === "currency" && <Currency />}
        {/* <img src={require("../../../assets/img/country.svg")} /> */}
        <span>{selectedOption || options[0]}</span>
        <Arrow
          style={
            isOpen
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
          className="custom-dropdown-arrow"
        ></Arrow>
      </div>
      {isOpen && (
        <div className="custom-dropdown-list-container">
          <ul className="custom-dropdown-list">
            {options.map((option) => (
              <li
                className="list-item"
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {img === "language" && <Language />}
                {img === "currency" && <Currency />}
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
