import React, { useRef, useState } from "react";
import bottomAngleIcon from "../../assets/bottomAngleIcon.svg";
import "./styles.scss";

const Dropdown = ({
  customClass,
  customProps,
  label,
  optionsList,
  selectedOption,
  itemClickHandler,
}) => {
  const [showDetails, updateShowDetails] = useState(false);

  return (
    <React.Fragment>
      {!!label && <label className="dropdownLabel">{label}</label>}
      <div
        className={customClass ? `Dropdown ${customClass}` : "Dropdown"}
        {...customProps}
        onClick={() => {
          updateShowDetails(!showDetails);
        }}
      >
        <div className="Dropdown__Main">
          {selectedOption?.label || "Select"}
          <div
            className={
              showDetails
                ? "Dropdown__Main--Toggle Dropdown__Main--Toggle--Show"
                : "Dropdown__Main--Toggle Dropdown__Main--Toggle--Hide"
            }
          >
            <img
              className={
                showDetails
                  ? "Dropdown__Main--Toggle--Verticle Dropdown__Main--Toggle--Verticle--Show"
                  : "Dropdown__Main--Toggle--Verticle Dropdown__Main--Toggle--Verticle--Hide"
              }
              src={bottomAngleIcon}
              alt="bottomAngleIcon"
              width="24px"
              height="24px"
            />
          </div>
        </div>
        <div
          className={
            showDetails
              ? "Dropdown__Extended Dropdown__Extended--Show"
              : "Dropdown__Extended Dropdown__Extended--Hide"
          }
        >
          {optionsList?.map((item, index) => (
            <div
              onClick={() => {
                itemClickHandler(item);
              }}
              key={item?.id || index}
              className="Dropdown__Extended__item"
            >
              {item?.label}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
