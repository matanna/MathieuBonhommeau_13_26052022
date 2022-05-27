import React from "react";
import Style from "./FeatureItem.module.scss";

const FeatureItem = ({ image, title, children }) => {
  return (
    <div className={Style.featureItem}>
      <img src={image} alt="Chat Icon" className={Style.featureIcon} />
      <h3 className={Style.featureItemTitle}>{title}</h3>
      <p className={Style.featureText}>{children}</p>
    </div>
  );
};

FeatureItem.propTypes = {};

export default FeatureItem;
