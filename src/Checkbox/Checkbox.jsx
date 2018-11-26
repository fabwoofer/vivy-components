import React from "react";
import PropTypes from "prop-types";
import CheckboxStyle from "./checkbox.style";

export default function Checkbox({
  id,
  children,
  value,
  name,
  optional,
  errors
}) {
  return (
    <CheckboxStyle>
      <input id={id} name={name} type="checkbox" value={value} />
      {/* eslint-disable-next-line */}
      <label id={id} htmlFor={id} />
      <div className="content">{children}</div>

      {optional ? <span className="optional">*optional</span> : null}
      {id in errors &&
        errors[id].map(index => (
          <span key={index} className="error-feedback">
            {index.message}
          </span>
        ))}
    </CheckboxStyle>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  optional: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  errors: PropTypes.shape({
    inputId: PropTypes.arrayOf({
      message: PropTypes.string,
      field: PropTypes.string
    })
  })
};

Checkbox.defaultProps = {
  optional: false,
  value: "",
  name: "",
  errors: {}
};
