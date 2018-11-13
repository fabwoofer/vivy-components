import React from "react";
import PropTypes from "prop-types";
import ButtonStyles from "./button.style";

export default function Button({
  type,
  htmlType,
  onClick,
  children,
  disabled,
  customStyle
}) {
  return (
    <ButtonStyles>
      {/* eslint-disable-next-line */}
      <button
        disabled={disabled}
        onClick={onClick}
        className={type}
        type={htmlType}
        style={customStyle}
      >
        <div className="component-child">{children}</div>
      </button>
    </ButtonStyles>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
  customStyle: PropTypes.shape({}),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  type: "primary",
  htmlType: "button",
  customStyle: {},
  disabled: false
};