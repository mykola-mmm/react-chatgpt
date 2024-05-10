import React from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { useState, useRef, useEffect, useCallback } from "react";



export default function DropDown() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <>
      <button  onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
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

    

    function useClickOutside(ref, onClickOutside) {
        useEffect(() => {
          /**
           * Invoke Function onClick outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              onClickOutside();
            }
          }
          // Bind
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // dispose
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref, onClickOutside]);
      }

      const wrapperRef = useRef("menu");
      useClickOutside(wrapperRef, () => {
        onClickOutsideHandler(false);
      });

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
