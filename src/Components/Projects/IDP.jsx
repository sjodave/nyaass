/* eslint-disable no-octal-escape */
import React from "react";
import ImageSlider from "../ImageSlider";
import "react-slideshow-image/dist/styles.css";
import { IDPImages } from "../ImageArray";
export default function IDP() {
  return (
    <>
      <h1 id="IDP" className="dark text-center">
        Integral Development Programme
      </h1>
      <ImageSlider images={IDPImages}></ImageSlider>
      <div>
        <p>
          In IDP, Integral means whole, to develop the whole person. No two
          children are born completely alike. Current environment follows the
          ‘fit for all’ formula. This formula can rob their unique identities,
          worth and potential. IDP seeks to develop whole person i.e- Mind ,
          body, heart and spirit. IDP searches out talents in each student and
          each staff member, and provides opportunities for using and nurturing
          those talents.
        </p>
      </div>
      <div className="card p-4 mb-2">
        <div>
          Values
          <ol>
            <li>
              First value of our project is 'nothing can be taught'. Teacher is
              a helper and a guide. Teacher’s work is to suggest ideas and not
              to impose them on the students.
            </li>
            <li>
              Second value: It starts with the belief that there is greatness in
              every student and every staff member.
            </li>
          </ol>
        </div>
      </div>
      <div className="row d-flex justify-content-around">
        <div className="card p-4 mb-2 col-md-5 col-sm-6">
          Physical education
          <ol>
            <li>Nutrition</li>
            <li>Exercise </li>
            <li>Hygiene </li>
            <li>Trekking</li>
            <li> Rest, Relaxation and prevention thinking</li>
          </ol>
        </div>
        <div className="card p-4 mb-2 col-md-5 col-sm-6">
          Spiritual Education
          <ol>
            <li> Meaning of life</li>
            <li> Inner voice</li>
            <li>Integrity</li>
          </ol>
        </div>
        <div className="card p-4 mb-2 col-md-5 col-sm-6">
          Mental Education
          <ol>
            <li>Continuous, Systematic, Discipline study and education</li>
            <li>Continuous, Systematic, Discipline study and education</li>
            <li>Critical inking</li>
            <li>Creative inking</li>
            <li>Decision Making</li>
            <li>Self Awareness </li>
          </ol>
        </div>
        <div className="card p-4 mb-2 col-md-5 col-sm-6">
          Social and emotional education
          <ol>
            <li>Managing Emotions</li>
            <li>personal motivation </li>
            <li>personal motivation </li>
            <li>Communication Skills</li>
            <li> Empathy</li>
            <li>Cooperation Skills </li>
            <li>Cooperation Skills</li>
            <li>Assertiveness Skills</li>
          </ol>
        </div>
      </div>

      <div className="mt-4">
        <p>
          Integral Development depends on the development of the personalities
          of our students through the skills necessary to lead a good life.
          These skills are said to be life skills. In IDP, the focus is given
          completely on trying to facilitate these life skills to the students
          through various activities. The facilitating techniques used are
          activity based, participative and practical learning and with a
          minimum number of students per classroom. Where the entire universe is
          a classroom, students should be able to explore maximum in the
          physical limits of classrooms is also a thought behind the
          facilitating techniques of IDP.
        </p>
        <ol className="card p-4 mb-2">
          Why Life Skills?
          <li>The promotion of healthy child and adolescent development.</li>
          <li>
            Primary prevention of some key causes of child and adolescent death,
            disease and disability.
          </li>
          <li>Socialization</li>
          <li>Preparing young people for changing social circumstances. </li>
          <li>
            Many children live in circumstances that make them especially
            vulnerable and limits their choices and future potential.
          </li>
          <li>
            Life skills learning does not change events, but helps children to
            cope better with these events and enrich the world they live in.
          </li>
          <li>
            Life skills learning should help children become more aware of: what
            they are doing, how they are doing things, how they obtain
            information - how they think, feel and behave.
          </li>
          <li>
            With better understanding about themselves and others, they can make
            better choices.
          </li>
          <li>
            A sensitive educator can help children look deep inside themselves,
            discover causes for problems and start to develop positive behavior.
          </li>
        </ol>
      </div>
    </>
  );
}
