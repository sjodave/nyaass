import React from "react";
import { event } from "../ImageArray";
export default function Events() {
  return (
    <>
      <h1 className="dark dFlex-center  mb-5">Events</h1>
      <div className="plr">
        {event.map((e) => {
          return (
            <div className="mb-5 event-cards p-3">
              <p className="col-sm-12 col-lg-6">
                <b>{e.name} - </b>
                {e.info}
              </p>
              <img src={e.img} alt="Img" className="col-lg-4  col-12"></img>
            </div>
          );
        })}
      </div>
    </>
  );
}
