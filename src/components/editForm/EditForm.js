import React, { useState } from "react";
import Style from "./EditForm.module.scss";
import { Field } from "../index";
import { useSelector } from "react-redux";
import { apiUserSelector } from "../../utils/selectors";

const EditForm = (props) => {
  const [displayEditForm, setDispalyEditForm] = useState(false);
  const { user } = useSelector(apiUserSelector);

  const handleChange = () => {
    //Change firstname and lastname
  };

  return !displayEditForm ? (
    <>
      <h1>
        Welcome back
        <br />
        {`${user.firstName} ${user.lastName}`}
      </h1>
      <button
        className={Style.editButton}
        onClick={() => setDispalyEditForm(true)}
      >
        Edit Name
      </button>
    </>
  ) : (
    <>
      <h1>Welcome back</h1>
      <form>
        <div className={Style.editField}>
          <Field name="firstName" type="text" user={user} />
          <Field name="lastName" type="text" user={user} />
        </div>
        <div className={Style.updateButton}>
          <button type="submit">Modifier</button>
          <button type="button" onClick={() => setDispalyEditForm(false)}>
            Annuler
          </button>
        </div>
      </form>
    </>
  );
};

EditForm.propTypes = {};

export default EditForm;
