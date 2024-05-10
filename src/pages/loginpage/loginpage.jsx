import React from "react";
import { Link } from "react-router-dom";
import "./loginpage.scss";
import RunningMessage from "../../components/runningmessage/runningmessage";

export default function LoginPage({onClickLogin}) {

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
              <button className="btn" onClick={()=>onClickLogin(true)}>
                <h3>Login</h3>
              </button>
              <button className="btn" onClick={()=>onClickLogin(true)}>
                <h3>Sign Up</h3>
              </button>
            </div>
          </div>

          <div className="footer">
            <div className="logo">
              <img src="./logo.png" alt="" />
            </div>
            <div className="links">
              <Link to={`/policies/terms-of-use/`} target="_blank">Terms of use</Link>
              <span>|</span>
              <Link to={`/policies/privacy-policy/`} target="_blank">Privacy policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
