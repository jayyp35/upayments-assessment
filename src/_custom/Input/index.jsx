import React from "react";
import "./styles.scss";

const Input = ({
  icon,
  label,
  disabled,
  style,
  inputType = "input",
  onEnter,
  ...inputProps
}) => {
  const Component = inputType;
  return (
    <React.Fragment>
      {!!label && <label className="inputLabel">{label}</label>}
      <div
        className="inputContainer"
        style={disabled ? { background: `#e8e8e8` } : {}}
      >
        {icon && (
          <div className="inputContainer__icon">
            <img src={icon} alt="inputIcon" width="18px" height="18px" />
          </div>
        )}
        <Component
          style={style}
          disabled={disabled}
          {...inputProps}
          {...(inputProps?.type === "number"
            ? {
                onKeyDown: (e) => {
                  if (e.keyCode == 13 && onEnter) {
                    onEnter();
                  }
                  if (
                    e.key === "ArrowUp" ||
                    e.key === "ArrowDown" ||
                    e.key === "-" ||
                    e.key === "e" ||
                    e.key === "E" ||
                    e.key === "+" ||
                    e.key === "."
                  )
                    e.preventDefault();
                },
              }
            : {})}
        />
      </div>
    </React.Fragment>
  );
};

export default Input;
