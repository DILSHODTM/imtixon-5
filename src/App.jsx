import { useState } from "react";
import Header from "./Components/Header/Header";
import { Context } from "./UI/context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "./pages/Home/Home";
import Rooms from "./components/Rooms/Rooms";
import Aside from "./components/Aside/Aside";
import Repo from "./pages/Repo/Repo";
import Followers from "./UI/Followers/Followers";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [navbar, setNavbar] = useState(false);
  const [object, setObject] = useState({});
  const [apiValue, setApiValue] = useState(
    localStorage.getItem("key") || "DILSHODTM"
  );

  document.body.style.overflow = navbar ? "hidden" : "visible";
  return (
    <>
      <BrowserRouter>
        <Context.Provider
          value={{
            navbar: navbar,
            setNavbar: setNavbar,
            apiValue: apiValue,
            setApiValue: setApiValue,
            object: object,
            setObject: setObject,
          }}
        >
          <Header />
          <Rooms />

          <main className="main container">
            <Aside />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/repos" element={<Repo />} />
              <Route path="/followers" element={<Followers />} />
            </Routes>
          </main>
          <Footer />
          
        </Context.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
