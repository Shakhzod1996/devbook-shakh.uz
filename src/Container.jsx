import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import BoshSahifa from "./components/Sahifalar/BoshSahifa/BoshSahifa";
import Nazm from "./components/Sahifalar/Nazm";
import Maqolalar from "./components/Sahifalar/Maqolalar";
import Forum from "./components/Sahifalar/Forum";
import arr from "./secondMain";
import UllamoDesc from "./components/Sahifalar/BoshSahifa/Ullamolar/UllamoDesc/UllamoDesc";
import Kitoblar from "./components/Sahifalar/Kitoblar/Kitoblar";
import KitobDesc from "./components/Sahifalar/Kitoblar/Kitob/HarBirKitob/KitobDesc/KitobDesc";
import Account from "./components/Account/Account";
import ChangeAccountInfo from "./components/ChangeAccountUnfo/ChangeAccountInfo";

export default function Container(props) {
  let [newArr, setNewArr] = useState(arr);
  let [sort, setSort] = useState(arr);

  let [card, setCard] = useState([]);


  let saveClickedBookHandler = (item) => {
    if (card.indexOf(item) !== -1) return;
      setCard([...card, item]);
  };

  let HandleChange = (item, d) => {
    const ind = card.indexOf(item);
    const arr = card;
    arr[ind].amount +=d

    if (arr[ind].amount === 0) arr[ind].amount = 1
      
    setCard([...arr])
  } 

  return (
    <div className="container">
      <div className="routes">
        {props.pathName === "/" ? null : props.pathName ===
          "/sign-in" ? null : (
          <Header
          HandleChange={HandleChange}
          card={card}
          setCard={setCard}
            setPass={props.setPass}
            setFirstName={props.setFirstName}
            setsurName={props.setsurName}
            setNum={props.setNum}
            setEmail={props.setEmail}
          />
        )}
        <Routes>
          <Route
            exact
            path="bosh-sahifa/"
            element={
              <BoshSahifa
                newArr={newArr}
                setSort={setSort}
                setNewArr={setNewArr}
                sort={sort}
              />
            }
          />
          <Route
            path="kitoblar/"
            element={
              <Kitoblar
                setSort={setSort}
                newArr={newArr}
                setNewArr={setNewArr}
                sort={sort}
              />
            }
          />
          <Route path="nazm" element={<Nazm />} />
          <Route path="maqolalar" element={<Maqolalar />} />
          <Route path="forum" element={<Forum />} />

          <Route
            path="/bosh-sahifa/:id"
            element={<UllamoDesc newArr={newArr} />}
          />
          <Route
            path="/kitoblar/:id"
            element={
              <KitobDesc
                newArr={newArr}
                saveClickedBookHandler={saveClickedBookHandler}

              />
            }
          />
          <Route
            path="account/"
            element={
              <Account
                num={props.num}
                surName={props.surName}
                email={props.email}
                firstName={props.firstName}
              />
            }
          />

          <Route
            path="account-settings"
            element={
              <ChangeAccountInfo
                num={props.num}
                surName={props.surName}
                email={props.email}
                firstName={props.firstName}
                setFirstName={props.setFirstName}
                setsurName={props.setsurName}
                setNum={props.setNum}
                setEmail={props.setEmail}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
