import React from 'react';
import './Account.css';
import user from '../../assets/imgs/user.png';
import frame from '../../assets/imgs/Frame.png'

export default function Account({surName, email, firstName, num}) {
  return (
    <div className='account'>
      <div className='top-info-flex'>
        <div className='left-info'>
          <div className='img-div'>
            <img src={user} alt="user" />
            <div><i class='bx bxs-star'></i></div>
            <h3>Oltin Kitobxon</h3>
            <p>186 ta kitob o’qigan</p>
          </div>

          <div className='inf'>
            <h3>{firstName} {surName}</h3>
            <p>Tavallud: <span>{num}</span></p>
            <p>Email: <span>{email}</span></p>
            <p>Bio: <span>FrontEnd Developer</span></p>
          </div>
        </div>

        <div className='right-info'>
          <img src={frame} alt="frame" />
        </div>
      </div>
    </div>
  )
}
