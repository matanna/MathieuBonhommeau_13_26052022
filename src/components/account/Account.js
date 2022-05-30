import React from "react";
import Style from "./Account.module.scss";

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

Account.propTypes = {};

export default Account;
