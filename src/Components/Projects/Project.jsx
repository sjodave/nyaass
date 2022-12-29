import React from "react";
import BeTheMentor from "./BeTheMentor";
import IDP from "./IDP";
import Parees from "./Parees";
import PustakPedhi from "./PustakPedhi";

export default function Project() {
  const style = {
    height: "9vh",
    width: "9vh",
  };
  return (
    <>
      <h1 className="dark text-center">
        <img src="/Projects.png" alt="" style={style}></img> PROJECTS
      </h1>
      <ul>
        <li>
          <a href="#PustakPedhi">Pustak Pedhi</a>
        </li>
        <li>
          <a href="#IDP">IDP</a>
        </li>
        <li>
          <a href="#BeAMentor">Be A Mentor</a>
        </li>
        <li>
          <a href="#Parees">Parees</a>
        </li>
      </ul>
      <br />
      <PustakPedhi></PustakPedhi>
      <br />
      <IDP></IDP>
      <br />
      <BeTheMentor></BeTheMentor>
      <br />
      <Parees></Parees>
    </>
  );
}
