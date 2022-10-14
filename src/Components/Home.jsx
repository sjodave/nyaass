import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCards from "./ProfileCards";
import TempProjects from "./Projects/TempProjects";
import { members, community } from "./ImageArray";
import CommunityMsg from "./CommunityMsg";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div id="background">
        <div id="home-text">
          <div className="bold">NYAASS</div>
          <div>
            <img src="tag line icon.png" alt="Img" className="logo"></img>{" "}
            स्वात्मानं जानीही। तत् परिवर्तनं भव
          </div>
          <br />
          <h1 id="title" className="bold mt-5">
            Education beyond academics!
          </h1>
          <div className="bold">
            {" "}
            <img src="mission-icon.png" alt="Img" className="logo"></img>{" "}
            Education for everyone, beyond the social, economic or any other
            background!
          </div>
        </div>
      </div>
      <div className="container">
        <br />
        {/* project temp */}
        <TempProjects></TempProjects>
        <br />
        {/* donation msg */}
        <div className="bold dFlex dark">
          Your small contribution can fuel the dreams in the little eyes of our
          students.
          <button
            className="btn bg-primary"
            onClick={() => navigate("/Funding")}
          >
            Donate Now
          </button>
        </div>
        <br />
        {/* display count of event,project.... */}
        <div className="dFlex display-count bold dark">
          <div>
            <img src="/Icon/events.png" alt="" className="icon"></img>
            <br />
            Events <br /> 50+
          </div>
          <div>
            <img src="/Icon/Projects.png" alt="" className="icon"></img>
            <br />
            Projects <br /> 4+
          </div>
          <div>
            <img src="/Icon/students.png" alt="" className="icon"></img>
            <br />
            Students <br /> 200+
          </div>
          <div>
            <img src="/Icon/Volunteeers.png" alt="" className="icon"></img>
            <br />
            Volunteers <br /> 90+
          </div>
        </div>
        <br />
        {/* help us msg card */}
        <div className="dFlex mt-4">
          <div>
            Help us <br />
            <b>Raise your funds for the cause you care</b>
            <br />
            Alone we can do so little; together we can do so much, You have the
            Power to bring Happiness so come and join us in this educational
            revolution.
          </div>
        </div>
        <div className="row dFlex">
          <img
            src="/Help/Fund raising 1.jpg"
            alt=""
            className="col-md-5 col-sm-12 mb-3"
          ></img>
          <img
            src="/Help/Fund raising 2.jpg"
            alt=""
            className="col-md-5 col-sm-12 mb-3"
          ></img>
          <p className="col-md-5 col-sm-12 ">
            <b className="red">01 Books - </b>
            We arrange for different types of books for all ages. They include
            story books, academic textbooks, journals, novels, educational
            magazines, newspapers, etc.
          </p>
          <p className="col-md-5 col-sm-12 ">
            <b className="green">02 Stationary - </b>
            We arrange useful stationary materials for the different activities
            which are carried out during the sessions by us. As we believe in
            creativity, we make sure that each and every child shows up his/her
            talent.
          </p>
          <p className="col-md-5 col-sm-12">
            <b className="yellow">03 School Fees - </b>
            We pay the school fees of the students who cannot afford basic
            education. As all children are equal to us, providing them with a
            good academic education is important.
          </p>
          <p className="col-md-5 col-sm-12">
            <b className="blue">04 Educational Visit - </b>
            We carry out field visits so that our children not only get educated
            through books but also to make them explore the outside world. We
            take them to science parks, different types of museums, exhibitions,
            etc.
          </p>
        </div>
        <div className="dFlex-space-around">
          <button
            className="btn bg-danger"
            onClick={() => navigate("/Funding")}
          >
            Donate us
          </button>
        </div>
        <br />
        {/* why nyaass */}
        <div className="dFlex-space-around">
          <div>
            One of the best around <br />
            <b>Why N.Y.A.A.S.S.</b>
            <br />
          </div>
        </div>
        <div
          className="row dFlex cursor"
          onClick={() => navigate("/education-model")}
        >
          <div className="col-lg-5 col-sm-11">
            <img
              src="/Help/Agricultural model of teaching icon.png"
              alt=""
              className="icon"
            ></img>{" "}
            Agricultural model of teaching
          </div>
          <div className="col-lg-5 col-sm-11">
            <img
              src="/Help/Holistic education.png"
              alt=""
              className="icon"
            ></img>
            Holistic education
          </div>
          <div className="col-lg-5 col-sm-11">
            <img
              src="/Help/Student centred classrooms.png"
              alt=""
              className="icon"
            ></img>
            Student centred classrooms
          </div>
          <div className="col-lg-5 col-sm-11">
            <img src="/Help/Facilitator.png" alt="" className="icon"></img>{" "}
            Facilitator
          </div>
          <div className="col-lg-5 col-sm-11">
            <img
              src="/Help/Activity based learning.png"
              alt=""
              className="icon"
            ></img>{" "}
            Activity based learning
          </div>
          <div className="col-lg-5 col-sm-11">
            <img src="/Help/Evaluations.png" alt="" className="icon"></img>{" "}
            Evaluations
          </div>
        </div>
        <br />
        {/* gallery */}
        {/* help us monthly */}
        <div className="dFlex-space-around">
          <div>
            Help Us <br />
            <b>MONTHLY</b>
            <br />
            <p>
              We need various resources such as classrooms, stationeries, etc.
              This is only possible with your kind donations every month. We
              expect your support in this journey ahead. It would be grateful
              from our side if you could ask your friends, family or anyone
              close to you, to be a part in this small initiative and support
              us.
            </p>
          </div>
        </div>

        {/* Executive Body description */}
        <div className="dFlex-space-around bold mt-5">
          Executive Body description
        </div>
        <ProfileCards info={members}></ProfileCards>

        {/* Testimonials */}
        <div className="dFlex-space-around ">
          <div>
            Testimonials <br />
            <b>What does our community wish to say?!</b>
            <br />
          </div>
        </div>
        <CommunityMsg info={community}></CommunityMsg>
        <hr></hr>
        <a href="https://goo.gl/maps/svNdY51zZVF2jiZd9">Location</a>
        <br />

        <div>
          <i
            className="fa fa-map-marker"
            aria-hidden="true"
            style={{ fontSize: "25px", color: "blue" }}
          ></i>{" "}
          Head Office - 440, Shukrawar Peth, Opp. Mamledar Kacheri, Shivaji
          Road, Pune, 411002 LandMark - opposite to Mamledar Kacheri, Shivaji
          Road
        </div>
        <div>
          <i
            className="fa fa-clock-o"
            aria-hidden="true"
            style={{ fontSize: "25px", color: "blue" }}
          ></i>{" "}
          Office timing Mon-Sat: 09.15 AM to 6.00 PM
        </div>
        <div>
          <i
            className="fa fa-phone"
            aria-hidden="true"
            style={{ fontSize: "25px", color: "blue" }}
          ></i>{" "}
          Contact No <br />
          Rohit Yaligar : 7972418492 <br />
          Pritesh Pitale - 9762198860
        </div>
        <div>
          <i
            className="fa fa-envelope"
            aria-hidden="true"
            style={{ fontSize: "25px", color: "blue" }}
          ></i>{" "}
          Email -{" "}
          <a href="mailto:nyaass.hrdept@gmail.com">nyaass.hrdept@gmail.com</a>
        </div>
      </div>
    </>
  );
}
