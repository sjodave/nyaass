import React from "react";
import Card from "react-bootstrap/Card";
export default function CommunityMsg({ info }) {
  return (
    <div className="profileCard mt-2">
      {info.map((ev) => {
        return (
          <div className="col-12 col-lg-6 col-md-6" key={ev.name}>
            <Card className="dFlex m-2">
              <Card.Img
                variant="top"
                src={ev.img}
                style={{ width: "20vh" }}
                className="mt-2"
              />
              <Card.Body>
                <Card.Title>{ev.name}</Card.Title>
                <Card.Text>{ev.info}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
