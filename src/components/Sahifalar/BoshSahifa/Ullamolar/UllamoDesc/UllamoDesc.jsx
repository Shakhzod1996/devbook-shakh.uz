import { Link, useLocation } from "react-router-dom";
import "./UllamoDesc.css";
import UllamoKitobi from "./UllamoKitobi/UllamoKitobi";

export default function UllamoDesc({ newArr }) {
  let location = useLocation();
  return (
    <div className="ullamo-desc">
      {newArr.map((item) => {
        if (item.id == location.pathname.split("/").at(-1)) {
          return (
            <div key={item.id} className="ullamo-page-flex">
              <div className="left-side">
                <img src={item.userImg} alt="userImg" />
                <div className="left-desc-flex">
                  <div className="tavallud-sana">
                    <p>Tavallud sana</p>
                    <h1>5-Aprel {item.birth}</h1>
                    <p>Toshkent, Uzbekistan</p>
                  </div>

                  <div className="vafot-sanasi">
                    <p>vafot sanasi</p>
                    <h1>25-May {item.dead}</h1>
                    <p>Samarqand, Uzbekistan</p>
                  </div>
                </div>
              </div>
              {/*? Right side */}
              <div className="right-side">
                <h1 className="right-h1">{item.userName}</h1>
                <p className="right-p">{item.desc}</p>
                <div className="ijodi">
                  <div className="ijod-head-flex">
                    <i className="bx bxs-bookmark-star"></i>
                    <h3>IJODI</h3>
                  </div>
                  <p className="ijod-p">
                    Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
                    ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
                    muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
                    qaytmaydi“ qissasi boʻldi.
                  </p>
                </div>

                <div className="asarlari">
                  <h3>ASARLARI</h3>
                  <button className="barchasi">Barchasini ko’rish</button>
                  <ul className="book-ul">
                    {item.books.map((book, i) => {
                        return  <UllamoKitobi key={i} book={book} />
                      })}
                  </ul>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
