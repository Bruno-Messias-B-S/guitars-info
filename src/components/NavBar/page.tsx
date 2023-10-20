"use client";

import * as C from "./styles";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <C.Container>
        <div>
          <Link className="li" href={"/"}>
            Home
          </Link>
          <Link className="li" href={"/guitars"}>
            Guitars
          </Link>
          <Link className="li" href={"/yeah"}>
            Yeah
          </Link>
        </div>
      </C.Container>
    </>
  );
};

export default NavBar;
