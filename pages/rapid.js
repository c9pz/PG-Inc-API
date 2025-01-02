import React from "react";

const LandingPage = () => {
  return (
    <div style={{ background: 'url("/images/Landing/BlueCity/background_city.jpg") repeat-x', paddingTop: '35px' }}>
      <div id="Container" style={{ background: 'url("/images/Landing/BlueCity/forground_city.png") repeat-x' }}>
        <div id="Experimental" className="ShadowedStandardBox">
          <div className="Content">
            <div id="animatedHeader">
              <div id="headerLogo">
                <img src="/images/Landing/BlueCity/logo.png" alt="logo" />
              </div>
              <div id="headerTextTop">Join millions of builders</div>
              <div id="headerTextBottom">and explore their creations</div>
            </div>
            <div id="animatedBodyWrapper">
              <div id="animatedBody">
                <div className="VideoContainer">
                  <iframe
                    id="ytplayer"
                    type="text/html"
                    width="380"
                    height="250"
                    src="https://www.youtube.com/embed/LHdA7Yc-8Rg?fs=1&rel=0&controls=0&showinfo=0&autoplay=1&mute=1&loop=1"
                    frameBorder="0"
                  ></iframe>
                  <div className="slogan-container">
                    <div id="slogan">What will you build?</div>
                  </div>
                </div>
                <div id="animated-wrapper">
                  <div className="sign-up-row">
                    <div className="sign-up-inner-row">
                      <span id="animated-tab-signup" className="animated-tab">Sign up</span>
                      <span className="animated-tab">|</span>
                      <span id="animated-tab-login" className="animated-tab">Login</span>
                    </div>
                  </div>
                  <div id="animated-login" style={{ display: "none" }}>
                    <form method="post" id="login-form" action="/newlogin">
                      <div className="sign-up-row">
                        <div className="sign-up-inner-row">
                          <span id="login-error" className="required-text error" style={{ display: "none" }}></span>
                        </div>
                      </div>
                      <div className="sign-up-row">
                        <div>
                          <input
                            type="text"
                            id="loginUsername"
                            name="username"
                            className="text-box text-box-large"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="sign-up-row">
                        <div>
                          <input
                            type="password"
                            id="loginPassword"
                            name="password"
                            className="text-box text-box-large"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div>
                        <a href="#" className="btn-large btn-primary" id="login-button">Login</a>
                      </div>
                    </form>
                  </div>
                  <div id="animated-signup" style={{ display: "none" }}>
                    <form method="post" id="signup-form" action="/landing/animated">
                      <div className="sign-up-row">
                        <div className="sign-up-inner-row">
                          <span id="birthdayText">Birthday</span>
                        </div>
                        <div>
                          <select id="lstMonths"></select>
                          <select id="lstDays"></select>
                          <select id="lstYears"></select>
                        </div>
                      </div>
                      <div className="sign-up-row">
                        <div className="sign-up-inner-row">
                          <span id="genderText">Gender</span>
                        </div>
                        <div>
                          <input id="MaleBtn" name="gender" type="radio" value="Male" />
                          <label htmlFor="MaleBtn">Male</label>
                          <input id="FemaleBtn" name="gender" type="radio" value="Female" />
                          <label htmlFor="FemaleBtn">Female</label>
                        </div>
                      </div>
                      <div className="sign-up-row">
                        <div className="sign-up-inner-row">
                          <span id="usernameText">Username</span>
                        </div>
                        <div>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            className="text-box text-box-large"
                          />
                        </div>
                      </div>
                      <div className="sign-up-row">
                        <div className="sign-up-inner-row">
                          <span id="passwordText">Password</span>
                        </div>
                        <div>
                          <input
                            name="password"
                            id="password"
                            className="text-box text-box-large"
                            type="password"
                          />
                        </div>
                      </div>
                      <div className="sign-up-row">
                        <div className="sign-up-inner-row">
                          <span id="passwordConfirmText">Confirm Password</span>
                        </div>
                        <div>
                          <input
                            name="passwordConfirm"
                            id="passwordConfirm"
                            className="text-box text-box-large"
                            type="password"
                          />
                        </div>
                      </div>
                      <div>
                        <a href="#" className="btn-large btn-primary roblox-signup" id="SignUpButton">Sign Up</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="Footer Experimental">
          <div className="FooterContent">
            <p className="FooterParagraph">
              <a href="http://corp.roblox.com/" ref="landingsignup-company">Company</a> &nbsp;|&nbsp;
              <a href="http://corp.roblox.com/careers" ref="landingsignup-jobs">Careers</a> &nbsp;|&nbsp;
              <a href="http://blog.roblox.com" ref="landingsignup-blog">Blog</a> &nbsp;|&nbsp;
              <a href="/Info/Privacy.aspx" ref="landingsignup-privacy">Privacy Policy</a> &nbsp;|&nbsp;
              <a href="/Help/Builderman.aspx" ref="landingsignup-help">Help</a>
            </p>
            <div className="FooterLegaleseContainer">
              <p className="Legalese">
                ROBLOX, "Online Building Toy", characters, logos, names, and all related indicia are trademarks of
                <a href="http://corp.roblox.com/" ref="footer-smallabout" className="roblox-interstitial">ROBLOX Corporation</a>, © 2025. Patents pending.
                ROBLOX is not sponsored, authorized or endorsed by any producer of plastic building bricks, including The LEGO Group, MEGA Brands, and K'Nex, and no resemblance to the products of these companies is intended.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
