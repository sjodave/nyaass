import React from "react";
import { Link } from "react-router-dom";
import BeTheMentor from "./BeTheMentor";
import IDP from "./IDP";
import PustakPedhi from "./PustakPedhi";

export default function Project() {
  const style = {
    height: "9vh",
    width: "9vh",
  };
  return (
    <>
      <div className="container text-center bold m-2">
        <h1>
          <img src="/Projects.png" alt="" style={style}></img> PROJECTS
        </h1>
      </div>
      <>
        <div className="dFlex m-4">
          <img src="/Projects/Home page IDP  bg2.jpg" alt="Img"></img>
          <img src="/Projects/Home page Be a mentor bg.jpg" alt="Img"></img>
          <img src="/Projects/Home page Pustak pedhi bg.jpg" alt="Img"></img>
        </div>
        <div className="dFlex">
          <p className="m-4">
            <a href="#IDP">
              <b>IDP:</b>
            </a>{" "}
            IDP seeks to develop whole person i.e- Mind , body, heart and
            spirit. IDP searches out talents in each student and each staff
            member, and provides opportunities for using and nurturing those
            talents.
          </p>
          <p className="m-4">
            <a href="#BeAMentor">
              <b>Be a Mentor:</b>
            </a>{" "}
            The goal of self-managed mutual learning and the need for mentoring
            is encouraged within the relationship as well as the desire for
            development in support of organizational goals.
          </p>
          <p className="m-4">
            <a href="#PustakPedhi">
              <b>Pustak pedhi:</b>
            </a>{" "}
            The initiative of 'Pustak Pedhi' is not just meant for the child
            reading it, but it also inculcates a habit of reading amongst their
            siblings, their parents, their friends, and all their social group.
          </p>
        </div>
      </>
      <br />
      <IDP></IDP>
      <br />
      <BeTheMentor></BeTheMentor>
      <br />
      <PustakPedhi></PustakPedhi>
    </>
  );
}
