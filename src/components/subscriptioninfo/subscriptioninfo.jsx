import React from 'react'
import "./subscriptioninfo.scss";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {useState, useRef } from 'react';
import FullScreenPopUp from '../fullscreenpopup/fullscreenpopup';
import detectClickOutside from '../../utils/detectClickOutside';

export default function SubscriptionInfo() {

    const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='subscriptioninfo-wrapper'>
        <button className="subscriptioninfo" onClick={() => setShowMenu(!showMenu)}>
            <div className="icon-wrapper">
            <AutoAwesomeIcon />
            </div>
            <span className='text'>subscriptioninfo</span>
        </button>
        {showMenu && <FullScreenPopUp onClickOutsideHandler={setShowMenu}/>}
    </div>
  )
}
