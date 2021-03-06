import {Route, Routes, useLocation} from "react-router";
import {Error404, Home, Profil, SignIn} from "../pages";
import {Footer, Header} from "../components";
import Style from "./App.module.scss";

/**
 * The App component is the main component of the application. It contains the Header, the Footer and the main content
 * @returns {JSX.Element} The App component is being returned.
 */
function App() {
    // For retrieve the current route
    const location = useLocation();

    return (
        <div className={Style.App}>
            <Header/>
            <main className={location.pathname === "/" ? "" : "main bg-dark"}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/login"} element={<SignIn/>}/>
                    <Route path={"/profil"} element={<Profil/>}/>
                    <Route path={"/error"} element={<Error404/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
