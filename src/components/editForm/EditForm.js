import React, {useState} from "react";
import Style from "./EditForm.module.scss";
import {Field} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {apiUserSelector} from "../../utils/selectors";
import {apiUserCancel, apiUserSave, apiUserUpdate, setUserData,} from "../../features/apiUser";

/**
 * It renders a form to edit the user's name, and a button to toggle the form
 * @returns {JSX.Element} A function that returns a component
 */
const EditForm = () => {
  // This state is for open the update user form or close it
  const [displayEditForm, setDisplayEditForm] = useState(false);

  const {user, initialValues} = useSelector(apiUserSelector);
  const dispatch = useDispatch();

  // On change, user value are adapted in terms of fields values
  const handleChange = (e) => {
    dispatch(apiUserUpdate(e.target.id, e.target.value));
  };

  // If click on "Edit name" button,the form is dispalyed
  // If click on cancel (when the update form is open), new values are replaced by initial values
  const handleClick = () => {
    setDisplayEditForm(!displayEditForm);
    if (!displayEditForm) {
      dispatch(apiUserSave());
    } else {
      dispatch(apiUserCancel());
    }
  };

  // On submit, the values are sended to api for update the user datas in DB and after, the form is closed
  const handleSubmit = (e) => {
    e.preventDefault();
    const update = async () => {
      await dispatch(setUserData(user.firstName, user.lastName));
      dispatch(apiUserSave());
    };
    update();
    setDisplayEditForm(false);
  };

  return !displayEditForm ? (
      <>
        <h1>
          Welcome back
          <br/>
          {`${initialValues.firstName} ${initialValues.lastName}`}
        </h1>
        <button className={Style.editButton} onClick={handleClick}>
          Edit Name
        </button>
      </>
  ) : (
      <>
        <h1>Welcome back</h1>
        <form>
          <div className={Style.editField}>
            <Field
                name="firstName"
                type="text"
                user={user}
                handleChange={handleChange}
            />
            <Field
                name="lastName"
                type="text"
                user={user}
                handleChange={handleChange}
            />
          </div>
          <div className={Style.updateButton}>
            <button type="submit" onClick={handleSubmit}>
              Modifier
            </button>
            <button type="button" onClick={handleClick}>
              Annuler
            </button>
          </div>
        </form>
      </>
  );
};

export default EditForm;
