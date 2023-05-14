import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./SignIn.css";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

function SignIn() {
  const [userData, setUserData] = useContext(UserContext);
  // This the useContext hook to get the userData object and the setUserData function from the UserContext. The userData object holds information about the logged-in user.
  
  const [isLogIn, setLogIn] = useState(true);
  const [isLogIn2, setLogIn2] = useState(false);

  //These lines define two state variables isLogIn and isLogIn2 using the useState hook. isLogIn is initialized to true and isLogIn2 is initialized to false. These variables are used to keep track of which form to show to the user.
  const navigate = useNavigate();

  const showForgot = (e) => {
    e.preventDefault();
    setLogIn2(true);
  };
  //This function is called when the user clicks on the "forgot password" link. It sets the isLogIn2 variable to true, which shows the forgot password form.
  const showSignIn = (e) => {
    e.preventDefault();
    setLogIn(true);
    setLogIn2(false);
  };

  //This function is called when the user clicks on the "sign in" link. It sets the isLogIn variable to true and the isLogIn2 variable to false, which shows the sign in form and hides the forgot password form.
  const showSignUp = (e) => {
    e.preventDefault();
    setLogIn(false);
    setLogIn2(false);
  };
  //This function is called when the user clicks on the "sign up" link. It sets the isLogIn variable to false and the isLogIn2 variable to false, which shows the sign up form and hides the forgot password form.
  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user]);

// This useEffect hook is called whenever the userData.user changes. If userData.user is not null or undefined, it means that the user is logged in, so the navigate function is called to navigate to the home page ("/").

  return (
    <section id="home">
      <div className="slide-home">
        <div className="slide-item">
          <div className="container">
            <div className="row hero-padd">
              <div className="col-md-6 col-12 col-sm-6">
                <div className="authfy-login">
                  {isLogIn2 ? (
                    <ForgotPassword
                      showSignIn={showSignIn}
                      showSignUp={showSignUp}
                    />
                  ) : isLogIn ? (
                    <Login showSignUp={showSignUp} showForgot={showForgot} />
                  ) : (
                    <SignUp showSignIn={showSignIn} />
                  )}
                </div>
              </div>

              <div className="col-md-6 col-12 col-sm-6">
                <div className="padd-text fadeInLeft">
                  <small className="small-text">About</small>
                  <h2 className="title-h2">Evangadi Networks</h2>
                  <p className="font-p mg-bt-30">
                    No matter what stage of life you are in, whether you’re just
                    starting elementary school or being promoted to CEO of a
                    Fortune 500 company, you have much to offer to those who are
                    trying to follow in your footsteps.
                  </p>
                  <p className="font-p mg-bt-30">
                    Wheather you are willing to share your knowledge or you are
                    just looking to meet mentors of your own, please start by
                    joining the network here.
                  </p>
                  <a
                    href="https://www.evangadi.com/explained/"
                    className="btn btn-blue"
                  >
                    How it works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
