import React from "react";
import "./loginpage.scss";
import RunningMessage from "../../components/runningmessage/runningmessage";

export default function LoginPage() {

  const loginPageMessages = [
    // { title: "Welcome", msgbody: "Ta!" },
    { title: "Welcome", msgbody: "Thank you for visiting our website!" },
    { title: "New Feature", msgbody: "Check out our latest feature!" },
    { title: "Important Notice", msgbody: "Please read the following notice." }
  ];

  return (
    <div className="loginpage-wrapper">
      <div className="left-section">
        <div className="wrapper">
          <div className="logo">
            <div>ChatGPT
            {/* <span>●</span> */}
            <div className="circle"></div>
            </div>
          </div>
          <RunningMessage messages={loginPageMessages} messagesIntervalMs={2000} textRenderSpeedMs={10}/>
        </div>
      </div>

      <div className="right-section">
        <div className="wrapper">
          <div className="center-elements">
            <div className="title">
              <h2>Get started</h2>
            </div>
            <div className="buttons">
              <button className="btn">
                <h3>Login</h3>
              </button>
              <button className="btn">
                <h3>Sign Up</h3>
              </button>
            </div>
          </div>

          <div className="footer">
            <div className="logo">
              <img src="./logo.png" alt="" />
            </div>
            <div className="links">
              <a href="">Terms of use</a>
              <span>|</span>
              <a href="">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
