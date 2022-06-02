import React from "react";
import Style from "./Error404.module.scss";
import {NavLink} from "react-router-dom";

/**
 * It returns a div with a title and a link to the home page
 * @returns {JSX.Element} A component that displays a message and a link to the home page.
 */
const Error404 = () => {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Oups !! Cette page n'existe pas</h1>
      <NavLink to="/">Retour à l'accueil</NavLink>
    </div>
  );
};

export default Error404;
