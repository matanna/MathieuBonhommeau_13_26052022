import React from "react";
import Style from "./Field.module.scss";

/**
 * It returns a div with a label and an input element, and the label and input element are different depending on the type
 * of input
 * @param type
 * @param name
 * @returns {JSX.Element} A React component with a field of a form
 */
const Field = ({ type, name }) => {
  const label = name.charAt(0).toUpperCase() + name.replace("-", " ").slice(1);

  return type === "checkbox" ? (
    <div className={Style.inputRemember}>
      <input type={type} id={name} />
      <label htmlFor="name">{label}</label>
    </div>
  ) : (
    <div className={Style.inputWrapper}>
      <label htmlFor="name">{label}</label>
      <input type={type} id={name} />
    </div>
  );
};

Field.propTypes = {};

export default Field;
