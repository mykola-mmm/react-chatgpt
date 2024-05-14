import React from 'react'
import "./fullscreenpopup.scss";
import detectClickOutside from '../../utils/detectClickOutside';
import { useRef } from 'react';

export default function FullScreenPopUp({onClickOutsideHandler}) {

  const wrapperRef = useRef("sdadsada");
  const exceptionRef = useRef("sdsdsdsd");
  let exceptionElementsRef = [exceptionRef];

  detectClickOutside(wrapperRef, exceptionElementsRef, () => {
    onClickOutsideHandler(false);
  });

  return (
    <div className='fullscreenpopup-wrapper' >
        <div className="popup-wrapper" ref={exceptionRef}>
            <div className="message-wrapper" ref={wrapperRef} >
            message
            </div>
            
        </div>
    </div>
  )
}