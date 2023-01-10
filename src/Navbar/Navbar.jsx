import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import "./Navbar.scss";

const Navbar = () => {
  const { navbar, apiValue, setObject, object, setApiValue } =
    useContext(Context);
  const [inputValue, setInputValue] = useState("");

  const objectValues = {
    inputValue: inputValue.trim().length === 0,
  };

  const api = async () => {
    const request = await fetch(`https://api.github.com/users/DILSHODTM`);
    const result = await request.json();
    setObject(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  const ClickedSubmit = (e) => {
    setInputValue("")
    e.preventDefault();
    window.location.reload();
    fetch(`https://api.github.com/users/DILSHODTM`)
      .then((response) => response.json())
      .then((data) => { if (!objectValues.inputValue) return setObject(data)});
  };

  return (
    <>
      <div className={!navbar ? "navbar" : "navbar hide"}>
        <div className="container-header">
          <form
            className="navbar-form"
            action="#"
            onSubmit={(e) => ClickedSubmit(e)}
          >
            <input
              type="text"
              className="navbar-form__input"
              placeholder="Search or jump to..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                localStorage.setItem("key", e.target.value);
              }}
            />
            <button type="submit" className="navbar-form-span">
              /
            </button>
          </form>
          <ul className="navbar-list">
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Dashboard
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Pull requests
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Issues
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Codespaces
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Marketplace
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Explore
              </a>
            </li>
            <li className="navbar-list-item">
              <a href="#" className="navbar-list-item__link">
                Sponsors
              </a>
            </li>
            <li className="navbar-list-item">
              <a
                href="#"
                className="navbar-list-item__link navbar-list-item__link--before"
              >
                Settings
              </a>
            </li>
            <li className="navbar-list-item">
              <a
                href="#"
                className="navbar-list-item-link navbar-list-item-link--flex"
              >
                <img
                  className="navbar-list-item-link__img"
                  src={object.avatar_url}
                  alt={object.name}
                  title={object.name}
                />
                <h5 className="navbar-list-item-link__title">
                  {object.login}
                </h5>
              </a>
            </li>
            <li className="navbar-list-item">
              <a
                className="navbar-list-item-link navbar-list-item-link--contact"
                href="#"
              >
                <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
                <h5 className="navbar-list-item-link__title">Sign Out</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
