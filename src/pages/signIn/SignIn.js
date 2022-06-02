import React, {useEffect} from "react";
import {Field} from "../../components";
import Style from "./SignIn.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {loginSelector} from "../../utils/selectors";
import {loginUser, setField} from "../../features/login";
import {useNavigate} from "react-router";
import {apiUserSave, getUserData} from "../../features/apiUser";

/**
 * It's a React component that renders a form to sign in a user
 * @returns {JSX.Element} A function component
 */
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged, user } = useSelector(loginSelector);

  useEffect(() => {
    document.title = "ArgentBank - Page SignIn";
  }, []);

  /**
   * If the user is logged, he is redirected on home page and the user dats are fetched from the api
   */
  useEffect(() => {
    if (isLogged) {
      navigate("/");
      const getData = async () => {
        await dispatch(getUserData());
        dispatch(apiUserSave());
      };
      getData();
    }
  }, [isLogged, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = async () => {
      await dispatch(loginUser(user.email, user.password));
    };
    login();
  };

  const handleChange = (e) => {
    const value =
      e.target.id === "rememberMe" ? e.target.checked : e.target.value;
    dispatch(setField(e.target.id, value));
  };

  return (
    <section className={Style.signInContent}>
      <i className={`fa fa-user-circle`}></i>
      <h1 className={Style.signInTitle}>Sign In</h1>
      <form>
        <Field
          type="email"
          name="email"
          user={user}
          handleChange={handleChange}
        />
        <Field
          type="password"
          name="password"
          user={user}
          handleChange={handleChange}
        />
        <Field
          type="checkbox"
          name="rememberMe"
          user={user}
          handleChange={handleChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className={Style.signInButton}
        >
          <span>Sign In</span>
        </button>
        {user.error && <p className="text-error">{user.error.message}</p>}
      </form>
    </section>
  );
};

export default SignIn;
