import React from "react";
import Style from "./Field.module.scss";
import PropTypes from "prop-types";

/**
 * It returns a div with a label and an input, or a div with a checkbox and a label
 * @param type
 * @param name
 * @param user Part of the state necessary for the field (login.user or apiUser.user)
 * @param handleChange Reference of fonction handleChange of parent component
 * @returns {JSX.Element} A div with a label and an input.
 */
const Field = ({ type, name, user, handleChange }) => {
  // Adapt text for label in terms of the field name
  const label = name.charAt(0).toUpperCase() + name.replace("-", " ").slice(1);

  return type === "checkbox" ? (
    <div className={Style.inputRemember}>
      <input
        type={type}
        checked={user.rememberMe}
        id={name}
        onChange={handleChange}
      />
      <label htmlFor="name">{label}</label>
    </div>
  ) : (
    <div className={Style.inputWrapper}>
      <label htmlFor="name">{label}</label>
      <input type={type} id={name} value={user[name]} onChange={handleChange} />
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  user: PropTypes.object,
  handleChange: PropTypes.func,
};

export default Field;
