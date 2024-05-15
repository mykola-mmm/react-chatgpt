import React from 'react'
import "./fullscreenpopup.scss";
import test from '../../utils/test';
import { useRef } from 'react';

export default function FullScreenPopUp({onClickOutsideHandler}) {

  const wrapperRef = useRef("sdadsada");
  const exceptionRef = useRef("sdsdsdsd");
  let exceptionElementsRef = [exceptionRef];

  test(exceptionRef, () => {
    onClickOutsideHandler(false);
  });

  return (
    <div className='fullscreenpopup-wrapper' >
        <div className="popup-wrapper" ref={exceptionRef}>
            <div className="message-wrapper" ref={wrapperRef} >
              <div className="popup-header">

              </div>
              <div className="popup-body">
                
              </div>
              <div className="popup-footer">

              </div>
            </div>
            
        </div>
    </div>
  )
}
