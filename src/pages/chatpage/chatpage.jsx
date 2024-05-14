import React from "react";
// import "../../index.css";
// import "../../App.css";
import "./chatpage.scss";
import Dropdown from "../../components/dropdown/dropdown";
import ShareIcon from "@mui/icons-material/Share";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EditNoteIcon from "@mui/icons-material/EditNote";

export default function ChatPage() {
  return (
    <>
      <div className="chatpagewrapper">
        <div className="left">
          <div className="nav-bar-wrapper">
            <div className="header">
              <div className="header-wrapper">
                <div className="button-wrapper">
                  <button>
                    <div className="new-chat">
                      <img src="/logo.png" alt="" />
                      {/* <span>New chat</span> */}
                    </div>
                    <EditNoteIcon />
                  </button>
                </div>
              </div>
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
              <div className="share-icon">
                <ShareIcon />
              </div>
            </div>
            <div className="chat-wrapper">
              <div className="chat"></div>
              <div className="input-wrapper">
                <div className="input-relative-wrapper">
                  <input type="text" placeholder="Type a message" />
                  <div className="button-wrapper">
                    <ArrowUpwardIcon />
                  </div>
                </div>
              </div>
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
