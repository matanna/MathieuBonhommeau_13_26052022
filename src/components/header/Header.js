import React from "react";
import Logo from "../../assets/argentBankLogo.png";
import Style from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {apiUserSelector, loginSelector} from "../../utils/selectors";
import {setIsLogged} from "../../features/login";
import {apiUserLogout} from "../../features/apiUser";

/**
 * It returns a header with a logo, a link to the profile page, and a link to the login page
 * @returns {JSX.Element} A header with a navbar with a logo and two links.
 */
const Header = () => {
  const { isLogged } = useSelector(loginSelector);
  const { initialValues } = useSelector(apiUserSelector);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setIsLogged());
    dispatch(apiUserLogout());
  };

  return (
    <header>
      <nav className={Style.mainNav}>
        <NavLink className={Style.mainNavLogo} to="/">
          <img
            className={Style.mainNavLogoImage}
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        {/* If the user is logged, his name and sign out icon are displayed otherwise only the login icon is displayed */}
        {isLogged ? (
          <div className={Style.signContainer}>
            <NavLink className={Style.mainNavItem} to="/profil">
              <i className="fa fa-user-circle"></i>
              {initialValues.firstName}
            </NavLink>
            <div
              className={`${Style.mainNavItem} ${Style.logout}`}
              onClick={handleLogout}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
          </div>
        ) : (
          <div className={Style.signContainer}>
            <NavLink className={Style.mainNavItem} to="/login">
              <i className="fa fa-sign-in"></i>
              Sign In
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
