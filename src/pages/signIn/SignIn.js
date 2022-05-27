import React from "react";
import { Field } from "../../components";
import Style from "./SignIn.module.scss";

const SignIn = (props) => {
  return (
    <section className={Style.signInContent}>
      <i className={`fa fa-user-circle`}></i>
      <h1 className={Style.signInTitle}>Sign In</h1>
      <form>
        <Field type="text" name="username" />
        <Field type="password" name="password" />
        <Field type="checkbox" name="remember-me" />
        <button type="submit" className={Style.signInButton}>
          <span>Sign In</span>
        </button>
      </form>
    </section>
  );
};

SignIn.propTypes = {};

export default SignIn;
