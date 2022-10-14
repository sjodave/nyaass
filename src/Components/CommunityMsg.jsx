import React from "react";
import Card from "react-bootstrap/Card";
export default function CommunityMsg({ info }) {
  return (
    <div className="profileCard mt-2">
      {info.map((ev) => {
        return (
          <div className="col-sm-5 col-11" key={ev.name}>
            <Card className="m-2" style={{ height: "77vh" }}>
              <Card.Body>
                <Card.Text>{ev.info}</Card.Text>
              </Card.Body>
              <div className="d-flex align-items-center justify-content-around">
                <Card.Img
                  variant="top"
                  src={ev.img}
                  style={{ width: "20vh" }}
                  className="mb-2"
                />
                <Card.Title>{ev.name}</Card.Title>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
