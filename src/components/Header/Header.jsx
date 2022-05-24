import React from 'react';
import './Header.css';
import avatar from '../../assets/imgs/avatar.png' 
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className='content'>
        <div className="header-in">
          <h3>BADIIYAT</h3>
          <div className='nav'>
            <ul className='ul-header'>
              <li><NavLink to='bosh-sahifa'>Bosh sahifa</NavLink></li>
              <li><NavLink to='kitoblar'>Kitoblar</NavLink></li>
              <li><NavLink to='nazm'>Nazm</NavLink></li>
              <li><NavLink to='maqolalar'>Maqolalar</NavLink></li>
              <li><NavLink to='forum'>Forum</NavLink></li>
            </ul>

            <div className='avatar-flex'>
              <img src={avatar} alt="avatar" />
              <i className='bx bx-chevron-down'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
