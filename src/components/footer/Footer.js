import React from "react";
import Style from "./Footer.module.scss";

/**
 * This function returns a footer element with a copyright message
 * @returns {JSX.Element} A footer with a copyright message.
 */
const Footer = () => {
  return (
    <footer className={Style.footer}>
      <p className={Style.footerText}>Copyright 2020 Argent Bank</p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
