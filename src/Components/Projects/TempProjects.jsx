// import React from "react";
// import { Link } from "react-router-dom";

// export default function TempProjects() {
//   const style = {
//     height: "9vh",
//     width: "9vh",
//   };
//   const imageStyle = {
//     width: "100%",
//   };
//   return (
//     <>
//       <div className="container text-center bold">
//         <h1>
//           <img src="/Projects.png" alt="" style={style}></img> PROJECTS
//         </h1>
//       </div>
//       <div className="row">
//         <div className="col-md-4 col-sm-12 dFlexVertical">
//           <img
//             className="circular-Img"
//             src="/Projects/Home page Pustak pedhi bg.jpg"
//             alt="Img"
//             style={imageStyle}
//           ></img>
//           <p className="mt-4">
//             <div className="subtitle">Pustak pedhi</div>
//             The initiative of 'Pustak Pedhi' is not just meant for the child
//             reading it, but it also inculcates a habit of reading amongst their
//             siblings, their parents, their friends, and all their social group.
//           </p>
//         </div>
//         <div className="col-md-4 col-sm-12 dFlexVertical">
//           <img
//             className="circular-Img"
//             src="/Projects/Home page IDP  bg2.jpg"
//             alt="Img"
//             style={imageStyle}
//           ></img>
//           <p className="mt-4">
//             <div className="subtitle">IDP</div>
//             IDP seeks to develop whole person i.e- Mind , body, heart and
//             spirit. IDP searches out talents in each student and each staff
//             member, and provides opportunities for using and nurturing those
//             talents.
//           </p>
//         </div>
//         <div className="col-md-4 col-sm-12 dFlexVertical">
//           <img
//             className="circular-Img"
//             src="/Projects/Home page Be a mentor bg.jpg"
//             alt="Img"
//             style={imageStyle}
//           ></img>
//           <p className="mt-4">
//             <div className="subtitle">Be a Mentor</div>
//             The goal of self-managed mutual learning and the need for mentoring
//             is encouraged within the relationship as well as the desire for
//             development in support of organizational goals.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

export default function TempProjects() {
  const navigate = useNavigate();
  const style = {
    height: "9vh",
    width: "9vh",
  };
  const imageStyle = {
    width: "100%",
    backgroundColor: "gray",
    borderRadius: "1rem",
  };
  return (
    <>
      <div className="container text-center bold">
        <h1>
          <img src="/Projects.png" alt="" style={style}></img> PROJECTS
        </h1>
      </div>
      <div className="row mb-2">
        <div className="col-md-4 col-sm-12 dFlexVertical">
          <img
            className="circular-Img"
            src="/logos/Pustak Pedhi White Icon.png"
            alt="Img"
            style={imageStyle}
          ></img>
          <div className="mt-4">
            <p className="subtitle">Pustak pedhi</p>
            The initiative of 'Pustak Pedhi' is not just meant for the child
            reading it, but it also inculcates a habit of reading amongst their
            siblings, their parents, their friends, and all their social group.
          </div>
        </div>
        <div className="col-md-4 col-sm-12 dFlexVertical">
          <img
            className="circular-Img"
            src="/logos/IDP White Icon.png"
            alt="Img"
            style={imageStyle}
          ></img>
          <div className="mt-4">
            <p className="subtitle">IDP</p>
            IDP seeks to develop whole person i.e- Mind , body, heart and
            spirit. IDP searches out talents in each student and each staff
            member, and provides opportunities for using and nurturing those
            talents.
          </div>
        </div>
        <div className="col-md-4 col-sm-12 dFlexVertical">
          <img
            className="circular-Img"
            src="/logos/Mentorship  White Icon.png"
            alt="Img"
            style={imageStyle}
          ></img>
          <div className="mt-4">
            <p className="subtitle">Be a Mentor</p>
            The goal of self-managed mutual learning and the need for mentoring
            is encouraged within the relationship as well as the desire for
            development in support of organizational goals.
          </div>
        </div>
      </div>
      <div className="dFlex-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/Projects")}
        >
          Read More
        </button>
      </div>
    </>
  );
}
