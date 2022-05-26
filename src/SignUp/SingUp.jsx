import React from "react";
import signImg from "../assets/imgs/sign-up.svg";
import SignForm from "./SignUpForm";
import "./SignUp.css";

export default function SingUn({
  setSwit,
  firstName,
  setFirstName,
  surName,
  setsurName,
  num,
  setNum,
  email,
  setEmail,
  pass,
  setPass,
}) {
  return (
    <div className="sign-up-flex">
      <div className="left-img">
        <img src={signImg} alt="girl is signing up" />
      </div>

      <div className="right-sign">
        <SignForm
          setSwit={setSwit}
          firstName={firstName}
          setFirstName={setFirstName}
          surName={surName}
          setsurName={setsurName}
          num={num}
          setNum={setNum}
          email={email}
          setEmail={setEmail}
          pass={pass}
          setPass={setPass}
        />
      </div>
    </div>
  );
}
