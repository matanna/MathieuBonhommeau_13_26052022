import React from "react";
import Style from "./FeatureItem.module.scss";
import PropTypes from "prop-types";

/**
 * It takes in an image, title, and children, and returns a div with an image, title, and children
 * @param image
 * @param title
 * @param children
 * @returns {JSX.Element} A div with a class of featureItem, an image, a title, and a paragraph.
 */
const FeatureItem = ({ image, title, children }) => {
  return (
    <div className={Style.featureItem}>
      <img src={image} alt="Chat Icon" className={Style.featureIcon} />
      <h3 className={Style.featureItemTitle}>{title}</h3>
      <p className={Style.featureText}>{children}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default FeatureItem;
