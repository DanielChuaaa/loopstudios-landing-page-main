import React from "react";
import logo from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import ig from "../images/icon-instagram.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerWrapper">
          <div className="containerr">
            <div className="footerWrapperChild">
              <div className="footerLogoLink">
                <div>
                  <img src={logo} alt="Logo" className="logo" />
                </div>

                <div className="footerNavLink">
                  <a href="#">About</a>
                  <a href="#">Careers</a>
                  <a href="#">Events</a>
                  <a href="#">Product</a>
                  <a href="#">Support</a>
                </div>
              </div>
              <div className="footerSocialCopyright">
                <div className="socialLinks">
                  <img src={fb} alt="fb logo" className="socialLinksImage" />
                  <img src={twitter} alt="twitter logo" className="socialLinksImage" />
                  <img src={pinterest} alt="pinterest logo" className="socialLinksImage" />
                  <img src={ig} alt="instagram logo" className="socialLinksImage" />
                </div>
                <div className="copyrightText">
                  <p> &#169; 2021 Loopstudios. All rights reserverd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
