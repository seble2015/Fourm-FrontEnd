import React from "react";
import "./Footer.css";
import Logo from "../../Source/img/footerlogo.png";
import { AiFillFacebook } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="footer-bottom-content clearfix">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo-footer">
                <a className="navbar-brand" href="/">
                  {" "}
                  <img src={Logo} alt="" />
                </a>
              </div>

              <ul className="footer-social-list list-social list-inline">
                <li>
                  <a
                    href="https://www.facebook.com/beza.demessie.3"
                    target="_blank"
                  >
                    
                    <AiFillFacebook />
                    <i className="social_facebook "></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank">
                    <TiSocialInstagram />
                    <i className="social_instagram "></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank">
                    <AiFillYoutube />
                    <i className="social_youtube "></i>
                  </a>
                  <a
                    href="
                   https://www.linkedin.com/in/seble-d-521444272/"
                    target="_blank"
                  >
                    <FaLinkedin />
                    <i className="social_youtube "></i>
                  </a>
                  <a href="https://twitter.com" target="_blank">
                    <FaTwitter />
                    <i className="social_youtube "></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h5>Useful Link</h5>
              <ul className="list-menu">
                <li>
                  <a
                    href="https://www.evangadi.com/explained/"
                   
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a href="https://www.evangadi.com/legal/terms/">
                    Terms of service
                  </a>
                </li>
                <a href="https://www.evangadi.com/legal/terms/">
                  Privacy Policy
                </a>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <h5>Contact Info</h5>
              <ul className="list-menu contact-list">
                <li>
                  <Link to="/legal/privacy/">Evangadi Networks</Link>
                </li>

                <li>
                  <Link to="/legal/privacy/">support@evangadi.com</Link>
                </li>
                <li>
                  <Link to="/legal/privacy/"> +1-202-386-2702</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
