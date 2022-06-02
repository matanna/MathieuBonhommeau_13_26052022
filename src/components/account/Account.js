import React from "react";
import Style from "./Account.module.scss";
import PropTypes from "prop-types";

/**
 * It takes in three props, and returns a section with a title, amount, and description
 * @param nameAccount
 * @param amount
 * @param children
 * @returns {JSX.Element} A section with a class of account.
 */
const Account = ({ nameAccount, amount, children }) => {
  return (
    <section className={Style.account}>
      <div className={Style.accountContentWrapper}>
        <h3 className={Style.accountTitle}>{nameAccount}</h3>
        <p className={Style.accountAmount}>{amount}</p>
        <p className={Style.accountAmountDescription}>{children}</p>
      </div>
      <div className={Style.accountContentWrapper + ".cta"}>
        <button className={Style.transactionButton}>View transactions</button>
      </div>
    </section>
  );
};

Account.propTypes = {
  nameAccount: PropTypes.string,
  amount: PropTypes.string,
};

export default Account;
