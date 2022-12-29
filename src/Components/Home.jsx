import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCards from "./ProfileCards";
import TempProjects from "./Projects/TempProjects";
import { members, community } from "./ImageArray";
import CommunityMsg from "./CommunityMsg";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg">
      <div id="background">
        <div id="home-text">
          <img
            src="/logos/NYAASS Logo 1.png"
            alt=""
            id="nyaass-logo"
            className="mt-1"
          ></img>
          <div className="bold">N.Y.A.A.S.S.</div>
          <br />
          <h1 id="title" className="bold mt-1">
            Education beyond academics!
          </h1>
          <div>
            "Education for everyone, beyond the social, economic or any other
            background!"
          </div>
          <button
            type="button"
            className="btn btn-light mt-3"
            onClick={() => navigate("/about-us")}
          >
            Read More
          </button>
        </div>
      </div>
      <div className="plr mt-5">
        <br />
        {/* project temp */}
        <TempProjects></TempProjects>
        <hr></hr>
        {/* donation msg */}
        <div className="bold dFlex dark mt-4 mb-4">
          Your small contribution can fuel the dreams in the little eyes of our
          students.
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/Funding")}
          >
            Donate Now
          </button>
        </div>
        <br />
        {/* display count of event,project.... */}
        <div className="dFlex display-count bold dark mb-4">
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
        <hr></hr>
        {/* help us msg card */}
        <div className="dFlex-center m-4">
          <div>
            <b className="yellow subtitle">Help us</b>
            <br />
            <b className="subtitle">Raise your funds for the cause you care</b>
            <br />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          <div className="col-md-4 col-12 mb-4">
            Alone we can do so little; together we can do so much, You have the
            Power to bring Happiness so come and join us in this educational
            revolution.
          </div>
          <img
            src="/Help/Fund raising 1.jpg"
            alt=""
            className="col-md-3 col-12 mb-5"
          ></img>
          <img
            src="/Help/Fund raising 2.jpg"
            alt=""
            className="col-md-3 col-12 mb-5"
          ></img>
          <p className="col-md-5 col-12 card p-2 mb-4">
            <b className="red">01 Books - </b>
            We arrange for different types of books for all ages. They include
            story books, academic textbooks, journals, novels, educational
            magazines, newspapers, etc.
          </p>
          <p className="col-md-5 col-12 card p-2 mb-4">
            <b className="green">02 Stationary - </b>
            We arrange useful stationary materials for the different activities
            which are carried out during the sessions by us. As we believe in
            creativity, we make sure that each and every child shows up his/her
            talent.
          </p>
          <p className="col-md-5 col-12 card p-2 mb-4">
            <b className="yellow">03 School Fees - </b>
            We pay the school fees of the students who cannot afford basic
            education. As all children are equal to us, providing them with a
            good academic education is important.
          </p>
          <p className="col-md-5 col-12 card p-2 mb-4">
            <b className="blue">04 Educational Visit - </b>
            We carry out field visits so that our children not only get educated
            through books but also to make them explore the outside world. We
            take them to science parks, different types of museums, exhibitions,
            etc.
          </p>
        </div>
        <div className="dFlex-space-around mt-4 mb-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/Funding")}
          >
            Donate us
          </button>
        </div>
        <hr></hr>
        {/* why nyaass */}
        <div className="dFlex-space-around mb-4 mt-5">
          <div>
            <b className="yellow subtitle">One of the best around</b>
            <br />
            <b className="subtitle">Why N.Y.A.A.S.S.</b>
            <br />
          </div>
        </div>
        <div
          className="row dFlex cursor"
          onClick={() => navigate("/education-model")}
        >
          <div className="col-lg-5 col-sm-11 dFlex mb-4">
            <img
              src="/Help/Agricultural model of teaching icon.png"
              alt=""
              className="icon-big"
            ></img>
            <p>
              <b>Agricultural model of teaching</b>
              <br />
              We treat education like organic farming. We recognize the
              interdependence of all of the aspects of development. We make them
              understand what teamwork is. We promote the development of our
              children not only intellectually but also physically, spiritually,
              and socially.
            </p>
          </div>
          <div className="col-lg-5 col-sm-11 dFlex mb-4">
            <img
              src="/Help/Holistic education.png"
              alt=""
              className="icon-big"
            ></img>
            <p>
              <b>Holistic education</b>
              <br />
              This methodology seeks to help children develop all their skills
              and to build their strengths. It focuses on play-based learning.
              The child develops better communication skills, social skills,
              interpersonal skills, builds confidence within oneself and becomes
              curious about other things.
            </p>
          </div>
          <div className="col-lg-5 col-sm-11 dFlex mb-4">
            <img
              src="/Help/Student centred classrooms.png"
              alt=""
              className="icon-big"
            ></img>
            <p>
              <b>Student centred classrooms</b>
              <br />
              The instructor is the imparter of knowledge while students listen,
              and are corrected and evaluated on their performance. The main
              focus is on both the teachers and students. It opens the door to a
              multitude of possibilities for educational curricular.
            </p>
          </div>
          <div className="col-lg-5 col-sm-11 dFlex mb-4">
            <img src="/Help/Facilitator.png" alt="" className="icon-big"></img>
            <p>
              <b>Facilitator</b>
              <br />
              The core role of a teacher is to facilitate learning. The concept
              of agility in teaching and learning nicely captures the idea that
              education has to be active, nimble and responsive.
            </p>
          </div>
          <div className="col-lg-5 col-sm-11 dFlex mb-4">
            <img
              src="/Help/Activity based learning.png"
              alt=""
              className="icon-big"
            ></img>
            <p>
              <b>Activity based learning</b>
              <br />
              Activity-based learning encourages students to actively
              participate in their own learning experience through practical
              activities such as problem-solving and independent investigation.
              We offer interactive learning forums based around: Exploration,
              Experimentation, Expression.
            </p>
          </div>
          <div className="col-lg-5 col-sm-11 dFlex mb-4">
            <img src="/Help/Evaluations.png" alt="" className="icon-big"></img>
            <p>
              <b>Evaluations</b>
              <br />
              Standardized testing is designed to get every student to arrive at
              the same correct answer to a question, which encourages a sea of
              sameness. Evaluation makes them realize what it is now and what
              upgradation needs to be done. They tell us what's strong with
              students by helping them discover and develop their own unique
              talents.
            </p>
          </div>
        </div>
        <div className="dFlex-center mb-4 mt-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/education-model")}
          >
            Read More
          </button>
        </div>
        {/* gallery */}
        {/* help us monthly */}
        <div className="dFlex-space-around card p-4 mt-5 mb-4">
          <div>
            <b className="yellow">Help Us</b>
            <br />
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
        <div className="dFlex-space-around mt-5 mb-4">
          <b className="subtitle">Executive Body description</b>
        </div>
        <CommunityMsg info={members}></CommunityMsg>
        {/* Testimonials */}
        <div className="dFlex-space-around mt-5">
          <div>
            <b className="yellow subtitle">Testimonials</b>
            <br />
            <b>What does our community wish to say?!</b>
            <br />
          </div>
        </div>
        {/* community msg */}
        <CommunityMsg info={community}></CommunityMsg>
        <hr></hr>
      </div>
      <div className="dark">
        Location -
        <a href="https://goo.gl/maps/svNdY51zZVF2jiZd9">
          https://goo.gl/maps/svNdY51zZVF2jiZd9
        </a>
        <br />
        <div>
          Head Office - 440, Shukrawar Peth, Opp. Mamledar Kacheri, Shivaji
          Road, Pune, 411002 LandMark - opposite to Mamledar Kacheri, Shivaji
          Road
        </div>
        <div>Office timing Mon-Sat: 09.15 AM to 6.00 PM</div>
        <div>
          Contact No - <br />
          Rohit Yaligar : 7972418492 <br />
          Pritesh Pitale - 9762198860
        </div>
        <div>
          Email -
          <a href="mailto:nyaass.hrdept@gmail.com"> nyaass.hrdept@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
