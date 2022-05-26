import React from 'react';
import signImg  from '../assets/imgs/sing-in.png';
import './SignIn.css';
import SignForm from './SignInForm';

export default function SingIn(props) {



  return (
    <div className='sign-in-flex'>
      <div className='left-img'>
        <img src={signImg} alt="girl is signing in" />
      </div>

      <div className='right-sign'>
        <SignForm setSwit={props.setSwit} singIn={props.singIn} setSingIn={props.setSingIn} />
      </div>
    </div>
  )
}
