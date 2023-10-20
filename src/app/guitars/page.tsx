"use client";

import * as C from "./styles";

import { useState } from "react";

import { GuitarNames } from "@/data/data";

export default function Guitars() {
  const [guitar, setGuitar] = useState([{ nome: "", desc: "", img: "" }]);

  const changeGuitar = (n1: string, d1: string, img1: string) => {
    setGuitar([{ nome: n1, desc: d1, img: img1 }]);
  };

  return (
    <>
      <C.Container>
        <div>
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
      </C.Container>
      <C.GuitarsContainer>
        {guitar.map((item) => (
          <>
            <div>{item.nome}</div>
            <div>{item.desc}</div>
            <div>{item.img}</div>
          </>
        ))}
      </C.GuitarsContainer>
    </>
  );
}
