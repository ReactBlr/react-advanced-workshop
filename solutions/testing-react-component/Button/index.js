import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = (props) => {
  const btnClasses = classnames("btn", {
    "btn-sm": props.size === "small",
    "btn-md": props.size === "medium",
    "btn-lg": props.size === "large",
    "disabled": props.disabled === true
  });

  return (
    <button className={ btnClasses } onClick={props.onClick} disabled={props.disabled}>
      { props.children }
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  children: "Button",
  size: "medium",
  onClick: () => {}
};

export default Button;