"use client";

import * as C from "./styles";

import { useState } from "react";

import { GuitarNames } from "@/data/data";

export default function Guitars() {
  const [guitar, setGuitar] = useState([{ nome: "", desc: "", img: "" }]);
  const [visible, setVisible] = useState("none");

  const changeGuitar = (n1: string, d1: string, img1: string) => {
    setGuitar([{ nome: n1, desc: d1, img: img1 }]);
    setVisible("flex");
  };

  return (
    <>
      <C.Container>
        <div className="container">
          <button
            onClick={() =>
              changeGuitar(
                GuitarNames.Strato.name,
                GuitarNames.Strato.desc,
                GuitarNames.Strato.img
              )
            }
          >
            Stratocaster
          </button>
          <button
            onClick={() =>
              changeGuitar(
                GuitarNames.Telecaster.name,
                GuitarNames.Telecaster.desc,
                GuitarNames.Telecaster.img
              )
            }
          >
            Telecaster
          </button>
          <button
            onClick={() =>
              changeGuitar(
                GuitarNames.LesPaul.name,
                GuitarNames.LesPaul.desc,
                GuitarNames.LesPaul.img
              )
            }
          >
            Les Paul
          </button>
        </div>
        <C.GuitarsContainer>
          {guitar.map((item) => (
            <>
              <div className="container-all">
                <div className="container-name-desc">
                  <div className="guitar-name">{item.nome}</div>
                  <div style={{ display: visible }} className="line"></div>
                  <div className="guitar-desc">{item.desc}</div>
                </div>
                <div className="container-img">
                  <img src={item.img} />
                </div>
              </div>
            </>
          ))}
        </C.GuitarsContainer>
      </C.Container>
    </>
  );
}
