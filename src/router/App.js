import { Route, Routes } from "react-router";
import { Error404, Home, Profil, SignIn } from "../pages";
import { Footer, Header } from "../components";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<SignIn />} />
          <Route path={"/profil"} element={<Profil />} />
          <Route path={"/error"} element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
