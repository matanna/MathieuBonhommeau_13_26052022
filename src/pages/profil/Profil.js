import React, { useEffect } from "react";
import Style from "./Profil.module.scss";
import Account from "../../components/account/Account";

const Profil = (props) => {
  useEffect(() => {
    document.title = "ArgentBank - Page Profil"; // Mettre le nom du user
  }, []);

  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className={Style.editButton}>Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account nameAccount="Argent Bank Checking (x8349)" amount="$2,082.79">
        Available Balance
      </Account>
      <Account nameAccount="Argent Bank Savings (x6712)" amount="$10,928.42">
        Available Balance
      </Account>
      <Account nameAccount="Argent Bank Credit Card (x8349)" amount="$184.30">
        Current Balance
      </Account>
    </>
  );
};

Profil.propTypes = {};

export default Profil;
