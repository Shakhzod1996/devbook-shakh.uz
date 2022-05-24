import React from 'react';
import signImg  from '../assets/imgs/sign-up.svg';
import SignForm from './SignUpForm';
import './SignUp.css' 

export default function SingUn(props) {
  return (
    <div className='sign-up-flex'>
      <div className='left-img'>
        <img src={signImg} alt="girl is signing up" />
      </div>

      <div className='right-sign'>
        <SignForm useSwit={props.useSwit} />
      </div>
    </div>
  )
}
