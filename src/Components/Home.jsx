import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const style = {
    height: "9vh",
    width: "9vh",
  };
  const navigate = useNavigate();
  return (
    <div className="container">
      <div id="background">
        <div id="home-text">
          <div className="bold">NYAASS</div>
          <div>
            <img src="tag line icon.png" alt="Img" className="logo"></img>{" "}
            स्वात्मानं जानीही। तत् परिवर्तनं भव
          </div>
          <br />
          <h1 id="title">Education beyond academics!</h1>
          <div className="bold">
            <img src="mission-icon.png" alt="Img" className="logo"></img> To
            empower people with integral education for realization of self and
            well being of nation.
          </div>
        </div>
      </div>
      <br />
      {/* project temp */}
      <div className="text-center bold m-2">
        <h1>
          <img src="/Projects.png" alt="" style={style}></img> PROJECTS
        </h1>
      </div>
      <div className="dFlex m-4">
        <img src="/Projects/Home page IDP  bg2.jpg" alt="Img"></img>
        <img src="/Projects/Home page Be a mentor bg.jpg" alt="Img"></img>
        <img src="/Projects/Home page Pustak pedhi bg.jpg" alt="Img"></img>
      </div>
      <div className="dFlex">
        <p className="m-4">
          <a href="/Projects/#IDP">
            <b>IDP:</b>
          </a>{" "}
          IDP seeks to develop whole person i.e- Mind , body, heart and spirit.
          IDP searches out talents in each student and each staff member, and
          provides opportunities for using and nurturing those talents.
        </p>
        <p className="m-4">
          <a href="/Projects/#BeAMentor">
            <b>Be a Mentor:</b>
          </a>{" "}
          The goal of self-managed mutual learning and the need for mentoring is
          encouraged within the relationship as well as the desire for
          development in support of organizational goals.
        </p>
        <p className="m-4">
          <a href="/Projects/#PustakPedhi">
            <b>Pustak pedhi:</b>
          </a>{" "}
          The initiative of 'Pustak Pedhi' is not just meant for the child
          reading it, but it also inculcates a habit of reading amongst their
          siblings, their parents, their friends, and all their social group.
        </p>
      </div>
      <br />
      {/* donation msg */}
      <div className="bold dFlex dark">
        Your small contribution can fuel the dreams in the little eyes of our
        students.
        <button className="btn bg-primary" onClick={() => navigate("/Funding")}>
          Donate Now
        </button>
      </div>
      <br />
      {/* display count of event,project.... */}
      <div className="dFlex display-count bold dark">
        <div>
          <img src="/Icon/events.png" alt=""></img>
          <br />
          Events <br /> 50+
        </div>
        <div>
          <img src="/Icon/Projects.png" alt=""></img>
          <br />
          Projects <br /> 4+
        </div>
        <div>
          <img src="/Icon/students.png" alt=""></img>
          <br />
          Students <br /> 200+
        </div>
        <div>
          <img src="/Icon/Volunteeers.png" alt=""></img>
          <br />
          Volunteers <br /> 90+
        </div>
      </div>
      <br />
      {/* help us msg card */}
      <div className="dFlex">
        <div>
          Help us <br />
          <b>Raise your funds for the cause you care</b>
          <br />
          Alone we can do so little; together we can do so much, You have the
          Power to bring Happiness so come and join us in this educational
          revolution.
        </div>
      </div>
      <div className="row dFlex m-3">
        <img
          src="/Help/Fund raising 1.jpg"
          alt=""
          className="col-lg-5 col-sm-12"
        ></img>
        <img
          src="/Help/Fund raising 2.jpg"
          alt=""
          className="col-lg-5 col-sm-12"
        ></img>
        <p className="col-lg-5 col-sm-12">
          <b className="red">01 Books - </b>
          We arrange for different types of books for all ages. They include
          story books, academic textbooks, journals, novels, educational
          magazines, newspapers, etc.
        </p>
        <p className="col-lg-5 col-sm-12">
          <b className="green">02 Stationary - </b>
          We arrange useful stationary materials for the different activities
          which are carried out during the sessions by us. As we believe in
          creativity, we make sure that each and every child shows up his/her
          talent.
        </p>
        <p className="col-lg-5 col-sm-12">
          <b className="yellow">03 School Fees - </b>
          We pay the school fees of the students who cannot afford basic
          education. As all children are equal to us, providing them with a good
          academic education is important.
        </p>
        <p className="col-lg-5 col-sm-12">
          <b className="blue">04 Educational Visit - </b>
          We carry out field visits so that our children not only get educated
          through books but also to make them explore the outside world. We take
          them to science parks, different types of museums, exhibitions, etc.
        </p>
      </div>
      <div className="dFlex-space-around">
        <button className="btn bg-danger" onClick={() => navigate("/Funding")}>
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
          <img src="/Help/Holistic education.png" alt="" className="icon"></img>
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
      {/* gallary */}
      {/* help us monthly */}
      <div className="dFlex-space-around">
        <div>
          Help Us <br />
          <b>MONTHLY</b>
          <br />
          <p>
            We need various resources such as classrooms, stationeries, etc.
            This is only possible with your kind donations every month. We
            expect your support in this journey ahead. It would be grateful from
            our side if you could ask your friends, family or anyone close to
            you, to be a part in this small initiative and support us.
          </p>
        </div>
      </div>
      {/* Executive Body description */}
      <div className="dFlex-space-around bold">Executive Body description</div>
      <p>
        <b>Rohit Yaligar (Chairman) -</b>Rohit Yaligar is one of the co-founders
        of N.Y.A.A.S.S. and holds the position of Chairman since. Professionally
        a graphic designer, he has been into this journey since 2016.
      </p>
      <p>
        <b>Pritesh Pitale (Vice-Chairman) -</b>Pritesh Pitale holds the position
        of Vice-Chairman in N.Y.A.A.S.S. He is an MBA in Marketing and is a part
        of this organization since 2020
      </p>
      <p>
        <b>Shraddha Kadam (Secretary) -</b>Shraddha Kadam is one of the
        co-founders of N.Y.A.A.S.S. and holds the position of Secretary since.
        She has pursued her Masters in Social Work and has been a part of this
        journey since 2017.
      </p>
      <p>
        <b>Aarohi Machikar (Treasurer) -</b>Aarohi Machikar holds the position
        of Treasurer since 2019 in N.Y.A.A.S.S. and has recently graduated with
        Bachelors in Commerce.
      </p>
      <p>
        <b>Rutuja Paygude (Executive Member) -</b>Rutuja Paygude is a part of
        N.Y.A.A.S.S. since 2020 and is working as an Executive member. She is
        currently pursuing her Masters in Social Work.
      </p>
      <p>
        <b>Vaishnavi Joshi (Executive Member) -</b>Vaishnavi Joshi has completed
        her Graduation in Commerce and is pursuing her interest in Travel &
        Tourism along with her work in N.Y.A.A.S.S. as an Executive member
      </p>
    </div>
  );
}
