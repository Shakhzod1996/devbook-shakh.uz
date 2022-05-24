import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import BoshSahifa from "./components/Sahifalar/BoshSahifa/BoshSahifa";
import Nasr from "./components/Sahifalar/Kitoblar/Kitoblar";
import Nazm from "./components/Sahifalar/Nazm";
import Maqolalar from "./components/Sahifalar/Maqolalar";
import Forum from "./components/Sahifalar/Forum";
import arr from "./MainObj";
import UllamoDesc from "./components/Sahifalar/BoshSahifa/Ullamolar/UllamoDesc/UllamoDesc";
import Kitoblar from "./components/Sahifalar/Kitoblar/Kitoblar";
import KitobDesc from "./components/Sahifalar/Kitoblar/Kitob/HarBirKitob/KitobDesc/KitobDesc";

export default function Container(props) {
  let [newArr, setNewArr] = useState(arr);
  let [sort, setSort] = useState(arr);
  return (
    <div className="container">
      <div className="routes">
        {props.pathName === "/" ? null : props.pathName ===
          "/sign-in" ? null : (
          <Header />
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
            path="kitoblar"
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
          {newArr.map((item,i) => {
          return <Route path="/kitoblar/:id" key={i} element={<KitobDesc books={item.books} />} />
          })}
        </Routes>
      </div>
    </div>
  );
}
