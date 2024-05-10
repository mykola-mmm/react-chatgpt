import React from "react";
// import "../../index.css";
// import "../../App.css";
import "./chatpage.scss";
import Dropdown from "../../components/dropdown/dropdown";

export default function ChatPage() {
  return (
    <>
      <div className="chatpagewrapper">
        <div className="left">
          <div className="nav-bar-wrapper">
            <div className="header">
              <div className="header-wrapper"></div>
            </div>
            <div className="chat-list-wrapper">
              <div className="chat">chat</div>
            </div>
            <div className="footer">
              <div className="footer-wrapper"></div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="content-wrapper">
            <div className="header">
              <Dropdown></Dropdown>
            </div>
            <div className="chat">
              SOME TEXT
            </div>
            <div className="footer">
              <div className="footer-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
