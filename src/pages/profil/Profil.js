import React, {useEffect} from "react";
import Account from "../../components/account/Account";
import {useSelector} from "react-redux";
import {apiUserSelector, loginSelector} from "../../utils/selectors";
import {Navigate} from "react-router";
import {EditForm} from "../../components";

/**
 * It returns a Navigate component if the user is not logged, otherwise it returns a div with a header and three Account
 * components
 * @returns {JSX.Element} A component that is a form to edit the user's information.
 */
const Profil = () => {
  // For check if a user is logged or not
  const { isLogged } = useSelector(loginSelector);

  const { error } = useSelector(apiUserSelector);

  useEffect(() => {
    document.title = "ArgentBank - Page Profil"; // Mettre le nom du user
  }, []);

  return !isLogged ? (
    <Navigate to="/login" />
  ) : (
    <>
      <div className="header">
        <EditForm />
      </div>
      {error && <p className="text-error">{error.message}</p>}
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

export default Profil;
