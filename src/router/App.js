import { Route, Routes } from "react-router";
import { Error404, Home, Profil, SignIn } from "../pages";

function App() {
  return (
    <div className="App">
      <h1>ArgentBank</h1>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<SignIn />} />
        <Route path={"/profil"} element={<Profil />} />
        <Route path={"/error"} element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
