import React, { useState } from "react";

function ForgotPassword({ showSignIn, showSignUp }) {
//This is a functional component called ForgotPassword which takes in two props - showSignIn and showSignUp.
  const [reset, setReset] = useState(false);
  const [form, setForm] = useState({});
//These lines use the useState hook to create two state variables - reset and form. reset is initialized to false and form is initialized to an empty object {}. setReset and setForm are functions provided by useState to update the values of these state variables.


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
//This is a function called handleChange which takes in an event object e. It updates the form state variable by spreading the previous value of form and adding a new key-value pair with the key as e.target.name and the value as e.target.value.

  return (
    <div className="authfy-panel panel-forgot active">
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="reset-wrapper">
            <div className="authfy-heading">
              <h3 className="auth-title">Reset your password</h3>
              <p>
                Fill in your e-mail address below and we will send you an email
                with further instructions.
              </p>
            </div>
            <div className="email-not-found"></div>
            <form name="forgetForm" className="forgetForm" method="POST">
              <div className="form-group wrap-input">
                <input
                  type="email"
                  className="form-control"
                  name="emailaddress"
                  placeholder="Email address"
                  onChange={handleChange}
                ></input>
                <span className="focus-input"></span>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    form.emailaddress
                      ? setReset(true)
                      : alert("Please enter your email first!");
                  }}
                >
                  Reset your password
                </button>
              </div>
              <div className="form-group">
                <a
                  className="lnk-toggler"
                  data-panel=".panel-login"
                  href="#"
                  onClick={showSignIn}
                >
                  Already have an account?
                </a>
              </div>
              <div className="form-group">
                <a
                  className="lnk-toggler"
                  data-panel=".panel-signup"
                  href="#"
                  onClick={showSignUp}
                >
                  Don’t have an account?
                </a>
              </div>
            </form>
          </div>
          {reset && (
            <div className="reset-link-sent">
              <div className="authfy-heading">
                <h3 className="auth-title">
                  Reset instruction is sent to your email
                </h3>
                <h4>Please check your email to reset your password.</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
