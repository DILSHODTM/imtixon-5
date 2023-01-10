import { useContext, useEffect, useState } from "react";
import "./Aside.scss";
import { Context } from "../../UI/Context/Context";
import {NavLink} from "react-router-dom";

const Aside = () => {
  const { apiValue, setObject, object } = useContext(Context);

  const api = async () => {
    const request = await fetch(`https://api.github.com/users/dilshodtm`);
    const data = await request.json();
    setObject(data);
  };

  useEffect(() => {
    api();
  }, [apiValue]);
  return (
    <>
      <div className="container">
        <aside className="aside">
          <div className="aside-box">
            <img
              src={object.avatar_url}
              alt={object.name}
              title={object.name}
              className="aside-box__user"
            />
            <h3 className="aside-box__title">{object.name}</h3>
            <p className="aside-box__username">{object.login}</p>
            <p className="aside-box__description">{object.bio}</p>
            <button className="aside-box__edit" type="button">
              Edit profile
            </button>
            <div className="aside-box-content">
              <i className="fas fa-users"></i>
              <h6 className="aside-box-content-total">{object.followers}</h6>
              <NavLink to="/followers" className="aside-box-content__description">followers</NavLink>
              <h6 className="aside-box-content-total">{object.following}</h6>
              <p className="aside-box-content__description">following</p>
            </div>
            <div className="aside-box-icon">
              <div className="aside-box-icon-icons">
                <i className="fa-solid fa-building-circle-arrow-right"></i>
                <p className="aside-box-icon-icons__paragraph">
                  {object.company}
                </p>
              </div>
              <div className="aside-box-icon-icons">
                <i className="fa-solid fa-location-dot"></i>
                <p className="aside-box-icon-icons__paragraph">
                  {object.location}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Aside;
