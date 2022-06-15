import React from "react";
import Logo from "../images/Logo.png";
import TopLeftImage from "../images/shapes/top-left.png";
import TopRightImage from "../images/shapes/top-right.png";
import BottomRightImage from "../images/shapes/bottom-right.png";
import BottomLeftImage from "../images/shapes/bottom-left.png";

const Login = () => {
  return (
    <div className="login__background">
      <div className="login__wrapper">
        <div className="login__content">
          <div className="logo__wrapper">
            <figure className="logo__img--mask">
              <img className="logo__img" src={Logo} alt="" />
            </figure>
            <h2 className="logo__text">Your Logo</h2>
          </div>
          <div>
            <div className="login__text">
              <h1>Sign Into</h1>
              <h2>Your Account</h2>
            </div>
            <div className="login__form--wrapper">
              <div>
                <input
                  className="login__input"
                  type="text"
                  placeholder="Company ID"
                />
              </div>
              <div>
                <input
                  className="login__input"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="login__checkbox">
                <input className="input__checkbox" type="checkbox" />
                <span>Remember Me</span>
              </div>
              <button className="btn login__button">Sign In</button>
            </div>
          </div>
        </div>

        <div className="login__shapes">
          <div>
            <div className="flex login__shape--top">
              <figure className="flex shape__top--left">
                <img src={TopLeftImage} alt="" />
              </figure>
              <figure className="flex shape__top--right">
                <img src={TopRightImage} alt="" />
              </figure>
            </div>
            <div className="flex">
              <figure className="flex shape__bottom--left">
                <img src={BottomLeftImage} alt="" />
              </figure>
              <figure className="flex shape__bottom--right">
                <img src={BottomRightImage} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
