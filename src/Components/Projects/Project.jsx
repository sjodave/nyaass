import React from "react";
import { Link } from "react-router-dom";
import BeTheMentor from "./BeTheMentor";
import IDP from "./IDP";
import Parees from "./Parees";
import PustakPedhi from "./PustakPedhi";
import TempProjects from "./TempProjects";

export default function Project() {
  return (
    <div className="container">
      <TempProjects></TempProjects>
      <br />
      <IDP></IDP>
      <br />
      <BeTheMentor></BeTheMentor>
      <br />
      <PustakPedhi></PustakPedhi>
      <br />
      <Parees></Parees>
    </div>
  );
}
