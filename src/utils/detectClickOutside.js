import { useEffect } from "react";

export default function detectClickOutside(ref, onClickOutside, exceptionElementsRef = []) {
    useEffect(() => {
      /**
       * Invoke Function onClick outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && !exceptionElementsRef.some((element => element.current.contains(event.target)))) {
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