import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Container from "./Container";
import SingIn from "./SignIn/SignIn";
import SingUp from "./SignUp/SingUp";

function App() {
  let location = useLocation();

  let [swit, useSwit] = useState(false);
  let [singIn, setSingIn] = useState("");

  return (
    <div className="App">
      <Routes>
        {swit ? (
          <Route path="/" exact element={<SingUp useSwit={useSwit} />} />
        ) : (
          <Route
            path="/"
            element={
              <SingIn useSwit={useSwit} setSingIn={setSingIn} singIn={singIn} />
            }
          />
        )}

        <Route
          path="container/*"
          element={<Container pathName={location.pathname} />}
        />
      </Routes>
    </div>
  );
}

export default App;
