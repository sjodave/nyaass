import React from "react";
import { Link } from "react-router-dom";
import BeTheMentor from "./BeTheMentor";
import IDP from "./IDP";
import Parees from "./Parees";
import PustakPedhi from "./PustakPedhi";
import TempProjects from "./TempProjects";

export default function Project() {
  const style = {
    height: "9vh",
    width: "9vh",
  };
  return (
    <div className="container">
      <div className="container text-center bold">
        <h1>
          <img src="/Projects.png" alt="" style={style}></img> PROJECTS
        </h1>
      </div>
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
    </div>
  );
}
