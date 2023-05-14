import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Axios from "../../axios";
import { useNavigate } from "react-router-dom";

function Login({ showSignUp, showForgot }) {
  const [userData, setUserData] = useContext(UserContext);
  const axios = Axios();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const loginRes = await axios.post(`${process.env.REACT_APP_base_url}/api/users/login`, {
        email: form.email,
        password: form.password,
      });

      //update global state with response from backend(user-info)
      // In the context of authentication, a token is a piece of data that represents a user's identity or access rights. Tokens are commonly used in web applications to maintain user sessions and authenticate users without requiring them to enter their username and password on every page or request. When a user logs in to an application, the server generates a token and sends it back to the client. The client then sends the token with every subsequent request to prove that it is authenticated and authorized to access the requested resource.
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
        config: {
          headers: { "x-auth-token": loginRes.data.token },
        },
      });

      //set localStorage with the token
      //The localStorage object is provided by the browser and allows web applications to store data on the user's computer. In this case, the token is stored with the key name "auth-token".
      localStorage.setItem("auth-token", loginRes.data.token);

      //navigate user to homepage
      navigate("/");
    } catch (err) {
      console.log("Error :" + err);
      alert("Error :" + err.response.data.msg);
    }
  };

  return (
    <div className="authfy-panel panel-login text-center active">
      <div className="authfy-heading">
        <h3 className="auth-title">Login to your account</h3>
        <p>
          {"Don’t have an account? "}
          <a
            className="lnk-toggler"
            data-panel=".panel-signup"
            href="#"
            onClick={showSignUp}
            style={{ color: "orange" }}
          >
            Create a new account
          </a>
        </p>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="ajax-return-login"></div>
          <form
            name="loginForm"
            className="loginForm"
            href="/"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="form-group wrap-input">
              <input
                type="email"
                className="form-control eva_email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
              />
              <span className="focus-input"></span>
            </div>
            <div className="form-group wrap-input">
              <div className="pwdMask">
                <input
                  type="password"
                  className="form-control eva_password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <span className="focus-input"></span>
                <span className="fa fa-eye-slash pwd-toggle"></span>
              </div>
            </div>
            <div className="row remember-row">
              <div className="col-xs-6 col-sm-6"></div>
              <div className="col-xs-6 col-sm-6">
                <p className="forgotPwd">
                  <a
                    className="lnk-toggler"
                    data-panel=".panel-forgot"
                    href="#"
                    onClick={showForgot}
                    style={{ color: "orange" }}
                  >
                    Forgot password?
                  </a>
                </p>
              </div>
            </div>

            <div className="form-group">
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
                style={{
                  backgroundColor: "#4f87ff",
                  borderRadius: "5px",
                  borderColor: "#4f87ff",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ff8c00";
                  e.target.style.borderColor = "#ff8c00";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#4f87ff";
                  e.target.style.borderColor = "#4f87ff";
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
