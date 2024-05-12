import React from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { useState, useRef, useEffect, useCallback } from "react";
import detectClickOutside from "../../utils/detectClickOutside";
import Switch from "@mui/material/Switch";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const modelList = [
  {
    logo_path: "/chatgpt3.5.png",
    name: "ChatGPT-3.5",
    description:
      "Great for everyday tasks",
  },
  {
    logo_path: "/chatgpt3.5.png",
    name: "ChatGPT-4",
    description:
      "Our smartest model yet...",
  },
];

export default function DropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const dropdownButtonRef = useRef();
  return (
    <>
      <button
        ref={dropdownButtonRef}
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
      >
        <span className="model-name">
          ChatGpt
          <span className="version">3.5</span>
        </span>
        <ArrowDropDownRoundedIcon />
      </button>
      {isDropDownOpen && (
        <DropDownMenu
          onClickOutsideHandler={setIsDropDownOpen}
          exceptionElementsRef={[dropdownButtonRef]}
        />
      )}
    </>
  );
}

function DropDownMenu({ onClickOutsideHandler, exceptionElementsRef = [] }) {
  const [switchOn, setSwitchOn] = useState(false);

  const wrapperRef = useRef("menu");
  detectClickOutside(wrapperRef, exceptionElementsRef, () => {
    onClickOutsideHandler(false);
  });

  return (
    <>
      <div className="dropdownmenu-wrapper" ref={wrapperRef}>
        <div className="dropdownmenu-header">
          <span>Model</span>
          <InfoOutlinedIcon />
        </div>
        <div className="model-list">
          {modelList.length > 0
            ? modelList.map((model, index) => {
                return DropDownMenuItem({ ...model, index });
              })
            : null}
        </div>
        <div
          className="dropdownmenu-footer"
          onClick={() => setSwitchOn(!switchOn)}
        >
          <div className="extra-options">
            <img src="" alt="" />
            <span>Model</span>
          </div>

          <Switch checked={switchOn}></Switch>
        </div>
      </div>
    </>
  );
}

function DropDownMenuItem({ logo_path, name, description, index }) {
  return (
    <div className="model-wrapper" key={index}>
      <img src={logo_path} alt="" />
      <div className="model-info">
        <h2>{name}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
}
