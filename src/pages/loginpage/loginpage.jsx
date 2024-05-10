import React from "react";
import "./loginpage.scss";
import RunningMessage from "../../components/runningmessage/runningmessage";

export default function LoginPage() {

  const loginPageMessages = [
    { title: "Lorem ipsum", msgbody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Nulla facilisi", msgbody: "Nulla facilisi. Sed euismod, elit at aliquet ultricies." },
    { title: "Vestibulum ante", msgbody: "Vestibulum ante ipsum primis in faucibus orci luctus." }
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
          <RunningMessage messages={loginPageMessages} messagesIntervalMs={4500} textRenderSpeedMs={33}/>
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
