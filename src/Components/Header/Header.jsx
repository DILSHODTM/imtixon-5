import { useContext, useState, useEffect } from "react";
import Navbar from "../../UI/Navbar/Navbar";
import { Context } from "../../UI/Context/Context";
import "./Header.scss";

const Header = () => {
  const { navbar, setNavbar, setApiValue, apiValue, object } =
    useContext(Context);
  const [valueObject, setValueObject] = useState({});
  const [value, setValue] = useState(
    localStorage.getItem("key") || "DILSHODTM"
  );

  const ClickedNavbar = () => {
    setNavbar((navbar) => !navbar);
  };

  const objectValues = {
    value: value.trim().length == 0,
  };

  const api = async () => {
    const request = await fetch(`https://api.github.com/users/dilshodtm`);
    const data = await request.json();
    setValueObject(data);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  const ClickedSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.github.com/users/dilshodtm`);
    const data = await response.json();
    setValueObject(data);
    setValue("");
    if (!objectValues.value) return setApiValue(value);
   
  };

  return (
    <>
      <Navbar />
      <header className="header">
        <div className="container-header">
          <nav className="nav">
            <i className="fa fa-bars" onClick={(e) => ClickedNavbar(e)}></i>
            <div className="nav-box">
              <i className="fab fa-github"></i>
              <form
                className="nav-box-form"
                action="#"
                onSubmit={(e) => ClickedSubmit(e)}
              >
                <input
                  type="text"
                  className="nav-box-form__input"
                  placeholder="Search or jump to..."
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    localStorage.setItem("key", e.target.value);
                  }}
                />
                <button type="submit" className="nav-box-form-span">
                  /
                </button>
              </form>
              <ul className="nav-box-list">
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Pull request
                  </a>
                </li>
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Issues
                  </a>
                </li>
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Codespaces
                  </a>
                </li>
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Marketplace
                  </a>
                </li>
                <li className="nav-box-list-item">
                  <a href="#" className="nav-box-list-item__link">
                    Explore
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-box">
              <i className="fa-regular fa-bell"></i>
              <div className="nav-box-drop">
                <i className="fa-solid fa-plus"></i>
                <i className="fa-sharp fa-solid fa-caret-down"></i>
              </div>
              <div className="nav-box-contact">
                <button className="btn btn-transparent">
                <img
                  src={object.avatar_url}
                  alt="user"
                  title="user"
                  className="nav-box-contact__img"
                />
                <i className="fa-sharp fa-solid fa-caret-down"></i>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
