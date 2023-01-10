import { useState, useEffect, useContext } from "react";
import "./Rooms.scss";
import { NavLink } from "react-router-dom";
import { Context } from "../../UI/Context/Context";

const Rooms = () => {
  const { apiValue,object } = useContext(Context);
  const [array, setArray] = useState([]);

  const api = async () => {
    const response = await fetch(
      `https://api.github.com/users/DILSHODTM/repos`
    );
    const result = await response.json();
    setArray(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="rooms">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "rooms-box rooms-box--active" : "rooms-box"
              }
            >
              <i className="fas fa-book-open"></i>
              <h5 className="rooms-box__title">Overview</h5>
            </NavLink>
            <NavLink
              to="/repos"
              className={({ isActive }) =>
                isActive ? "rooms-box rooms-box--active" : "rooms-box"
              }
            >
              <i className="fa fa-book"></i>
              <h5 className="rooms-box__title">Repositories</h5>
              <span className="rooms-box__total">{array.length}</span>
            </NavLink>
            <div className="rooms-box">
              <i className="fa fa-plus"></i>
              <h5 className="rooms-box__title">Projects</h5>
            </div>
            <div className="rooms-box">
              <i className="fas fa-cube"></i>
              <h5 className="rooms-box__title">Packages</h5>
            </div>
            <div className="rooms-box">
              <i className="fa-regular fa-star"></i>
              <h5 className="rooms-box__title">Stars</h5>
              <span className="rooms-box__total">23</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
