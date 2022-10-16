import React from "react";
import ImageSlider from "../ImageSlider";
import { PareesImages } from "../ImageArray";
export default function Parees() {
  return (
    <>
      <h1 className="dark text-center" id="Parees">
        PAREES
      </h1>
      <ImageSlider images={PareesImages}></ImageSlider>
      <div className="card p-4">
        <p>
          Parees' project started especially to provide education opportunities
          for tribal communities' children. Our main objective is to provide
          education to the children of this Pardhi community and make them
          available for educational as well as occupation opportunities.{" "}
        </p>
        <p>
          We have observed that even though we admit tribal children in school,
          they are adamant on going to school regularly as the curriculum taught
          there does not seem to be relatable with their day to day lives. The
          examples seen in the books are very much different from their reality
          while language becomes another issue where the mother-tongue of the
          children is completely different from that of the local languages used
          in schools. Teachers are not aware of the tribal culture of the
          student and this is the biggest hindrance in creating a
          student-teacher relationship. The time period and schedule used by the
          teachers is not comfortable for these children. As well as, the
          children are used to living in an open environment which leads to
          their lack of interest and bond with teachers and syllabus between the
          4 walls of the classrooms. It is necessary to understand the mentality
          and needs of these children, communicate with them and then begin with
          the education they are comfortable with. Our Parees project aims to do
          such work.
        </p>
        <p>
          Through the Parees project, we admitted 8 children in the nearby
          Samrat Ashok Vidyamandir School which is a government school. We also
          admitted 4 students to Punarutthan Samarasta Gurukulam in Chinchwad,
          which is a residential school especially run for Pardhi students by
          honourable social worker Girish Prabhune Sir. We have also conducted
          some awareness programmes for educational awareness in the community.{" "}
        </p>
      </div>
    </>
  );
}
