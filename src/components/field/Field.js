import React from "react";
import Style from "./Field.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setField} from "../../features/login";
import {loginSelector} from "../../utils/selectors";

/**
 * It returns a div with a label and an input element, and the label and input element are different depending on the type
 * of input
 * @param type
 * @param name
 * @returns {JSX.Element} A React component with a field of a form
 */
const Field = ({ type, name }) => {
  // Adapt text for label in terms of the field name
  const label = name.charAt(0).toUpperCase() + name.replace("-", " ").slice(1);

  const { user } = useSelector(loginSelector);

  const dispatch = useDispatch();

  /**
   * Dispatch the action setField for put value in the redux state when the field value change
   * @param e
   */
  const handleChange = (e) => {
    console.log(user);
    const value =
      e.target.id === "rememberMe" ? e.target.checked : e.target.value;
    dispatch(setField(e.target.id, value));
  };

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
      <input
        type={type}
        id={name}
        value={name === "email" ? user.email : user.password}
        onChange={handleChange}
      />
    </div>
  );
};

Field.propTypes = {};

export default Field;
