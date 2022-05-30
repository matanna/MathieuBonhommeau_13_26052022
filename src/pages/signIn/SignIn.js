import React, { useEffect } from "react";
import { Field } from "../../components";
import Style from "./SignIn.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginSelector } from "../../utils/selectors";
import { loginUser } from "../../features/login";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector(loginSelector);

  useEffect(() => {
    document.title = "ArgentBank - Page SignIn";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.password);
    dispatch(loginUser(user.email, user.password));
  };

  return (
    <section className={Style.signInContent}>
      <i className={`fa fa-user-circle`}></i>
      <h1 className={Style.signInTitle}>Sign In</h1>
      <form>
        <Field type="email" name="email" />
        <Field type="password" name="password" />
        <Field type="checkbox" name="rememberMe" />
        <button
          type="submit"
          onClick={handleSubmit}
          className={Style.signInButton}
        >
          <span>Sign In</span>
        </button>
      </form>
    </section>
  );
};

SignIn.propTypes = {};

export default SignIn;
