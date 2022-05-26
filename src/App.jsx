import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Container from "./Container";
import SingIn from "./SignIn/SignIn";
import SingUp from "./SignUp/SingUp";

function App() {
  let location = useLocation();

  let [swit, setSwit] = useState(false);
  let [singIn, setSingIn] = useState("");

  let [firstName, setFirstName] = useState("");
  let [surName, setsurName] = useState("");
  let [num, setNum] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  return (
    <div className="App">
      <Routes>
        {swit ? (
          <Route
            path="/"
            exact
            element={
              <SingUp
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
            }
          />
        ) : (
          <Route
            path="/"
            element={
              <SingIn setSwit={setSwit} setSingIn={setSingIn} singIn={singIn} />
            }
          />
        )}

        <Route
          path="container/*"
          element={
            <Container
            setPass={setPass}
              pathName={location.pathname}
              num={num}
              firstName={firstName}
              surName={surName}
              email={email}
              
                setFirstName={setFirstName}
                setsurName={setsurName}
                setNum={setNum}
                setEmail={setEmail}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
