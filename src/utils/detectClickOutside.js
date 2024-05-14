import { useEffect } from "react";

export default function detectClickOutside(ref, exceptionElementsRef = [], onClickOutside) {
    useEffect(() => {
      /**
       * Invoke Function onClick outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && !exceptionElementsRef.some((element => element.current.contains(event.target)))) {
          onClickOutside();
          console.log('ref', ref.current, 'ref.current.contains(event.target)', ref.current.contains(event.target));
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