import { useState, useEffect, useContext } from "react";
import { Context } from "../Context/Context";
import "./Followers.scss";

const Followers = () => {
  const { apiValue } = useContext(Context);
  const [array, setArray] = useState([]);
  const api = async () => {
    const request = await fetch(
      `https://api.github.com/users/DILSHODTM/followers`
    );
    const result = await request.json();
    setArray(result);
    console.log(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  return (
    <>
      <div className="container">
        {array.length > 0 ? (
          array.map((item, index) => (
            <div className="followers-container" key={index}>
              <div className="followers-container-box">
                <img
                  src={item.avatar_url}
                  alt="user"
                  title="user"
                  className="followers-container-box__img"
                />
                <div className="followers-container-box-content">
                  <div className="followers-container-box-content-titles">
                    <a target="_blank" href={item.html_url} className="followers-container-box-content-titles__login">
                      {item.login}
                    </a>
                  </div>
                </div>
              </div>
              <a target="_blank" href={item.html_url} className="followers-container-box__btn">
                Follow
              </a>
            </div>
          ))
        ) : (
          <h1>NOT FOUND</h1>
        )}
      </div>
    </>
  );
};

export default Followers;
