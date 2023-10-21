"use client";

import * as C from "./styles";
import Link from "next/link";

import { useState } from "react";

export const NavBar = () => {
  const [underline, setUnderline] = useState("");
  const [underline2, setUnderline2] = useState("");
  const [underline3, setUnderline3] = useState("");

  const turningOn = (name: string) => {
    switch (name) {
      case "home":
        setUnderline("1px solid blue");
        setUnderline2("1px solid transparent");
        setUnderline3("1px solid transparent");
        break;
      case "guitars":
        setUnderline2("1px solid blue");
        setUnderline("1px solid transparent");
        setUnderline3("1px solid transparent");
        break;
      case "yeah":
        setUnderline3("1px solid blue");
        setUnderline2("1px solid transparent");
        setUnderline("1px solid transparent");
        break;
    }
  };

  return (
    <>
      <C.Container>
        <div>
          <Link
            style={{ borderBottom: underline }}
            onClick={() => turningOn("home")}
            className="li"
            href={"/"}
          >
            Home
          </Link>
          <Link
            style={{ borderBottom: underline2 }}
            onClick={() => turningOn("guitars")}
            className="li"
            href={"/guitars"}
          >
            Guitars
          </Link>
          <Link
            style={{ borderBottom: underline3 }}
            onClick={() => turningOn("yeah")}
            className="li"
            href={"/yeah"}
          >
            Yeah
          </Link>
        </div>
      </C.Container>
    </>
  );
};

export default NavBar;
