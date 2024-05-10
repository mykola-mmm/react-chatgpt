import React from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { useState, useRef, useEffect, useCallback } from "react";
import detectClickOutside from "../../utils/detectClickOutside";


export default function DropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

const tst_ref = useRef("button_tst");
  return (
    <>
      <button  ref={tst_ref} onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
        <span className="model-name">ChatGpt</span>
        <span className="version">3.5</span>
        <ArrowDropDownRoundedIcon />
      </button>
      {isDropDownOpen && (
        <DropDownMenu
          onClickOutsideHandler={setIsDropDownOpen}
        />
      )}
    </>
  );
}

function DropDownMenu({ onClickOutsideHandler }) {

    const tst_ref = useRef("button_tst");
      const wrapperRef = useRef("menu");
      detectClickOutside(wrapperRef, () => {
        onClickOutsideHandler(false);
      }, [tst_ref]);

  return (
    <>
      <div className="dropdownmenu-wrapper" ref={wrapperRef}>
        <div className="dropdownmenu-header">
          <span></span>
        </div>
        <div className="model-list">
          <DropDownMenuModel />
        </div>
      </div>
    </>
  );
}

function DropDownMenuModel() {
  return (
    <>
      <div className="model">
        <span>ChatGPT</span>
        <span>3.5</span>
      </div>
    </>
  );
}
