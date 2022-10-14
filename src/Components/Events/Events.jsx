import React from "react";
import { event } from "../ImageArray";
export default function Events() {
  return (
    <div className="container">
      <h1>Events</h1>
      <div className="row dFlex-space-around">
        {event.map((e) => {
          return (
            <>
              <p className="col-sm-12 col-lg-6">
                <b>{e.name} - </b>
                {e.info}
              </p>
              <img
                src={e.img}
                alt="Img"
                className="col-sm-12 col-lg-4 mb-3"
              ></img>
            </>
          );
        })}{" "}
      </div>
    </div>
  );
}
