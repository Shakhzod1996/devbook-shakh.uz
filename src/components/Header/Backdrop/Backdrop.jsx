import React from 'react';
import './Backdrop.css';

export default function Backdrop({modal, modalHideHandler}) {
  return (
    <div onClick={modalHideHandler} className={`${modal ? 'backdrop' : 'backdrop backdrop-hide'}`}>
      
    </div>
  )
}
