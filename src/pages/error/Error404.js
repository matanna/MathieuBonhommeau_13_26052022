import React from "react";
import Style from "./Error404.module.scss";
import { NavLink } from "react-router-dom";

const Error404 = (props) => {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Oups !! Cette page n'existe pas</h1>
      <NavLink to="/">Retour à l'accueil</NavLink>
    </div>
  );
};

Error404.propTypes = {};

export default Error404;
