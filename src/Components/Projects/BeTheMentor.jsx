import React from "react";
import ImageSlider from "../ImageSlider";
import { MentorshipImages } from "../ImageArray";
export default function BeTheMentor() {
  return (
    <>
      <h1 id="BeAMentor" className="dark text-center">
        BE A MENTOR
      </h1>
      <ImageSlider images={MentorshipImages}></ImageSlider>
      <p className="card p-4">
        <i>
          "The purpose of mentoring is always to help the mentee to change
          something – to improve their performance, to develop their leadership
          qualities, to develop their partnership skills, to realize their
          vision, or whatever. This movement from where they are, (‘here’), to
          where they want to be."
        </i>
      </p>
      <p>
        If we try to learn about the lives of children and adolescents residing
        in slum communities, some particular issues can be observed, for
        example, lack of interest in education, domestic fights, economic
        issues, gender inequality, criminal issues, addictions, immature
        affairs. If we take a look at all these issues, we find a common root
        i.e. lack of guidance. All these issues can be solved by proper guidance
        and suggestions. How would it be if we realize this need of guidance
        within the adolescents in slum communities and hence, associate them
        with someone who can be their friend, philosopher, guide and parental
        figure.
      </p>
      <p>
        If not all, the issues in slums can be solved one by one. We at
        N.Y.A.A.S.S. are doing the same. Adolescents residing in Sambhanagar,
        Shahunagar as Gosavi communities are going to be associated with some
        similar like-minded, well-educated and matured mentors. If we could
        provide them with someone who is their closed-one, understanding member,
        where the children will be able to speak their hearts out, try to make
        their own decisions, understand various concepts and situations, and
        then form a rational opinion about the same, then with the help of this
        project, we can definitely see the changes we are longing for.
      </p>
      <p>
        Mentors and mentees will operate within an equal relationship with the
        focus on the person mentored. The responsibility for mentoring sits with
        the mentee. The mentoring programme maps across the Continuous Learning
        Framework (CLF) with an emphasis on personal and organizational
        capabilities. The goal of self-managed mutual learning and the need for
        mentoring is encouraged within the relationship as well as the desire
        for development in support of organizational goals.
      </p>
      <ol className="card p-4">
        There are six dimensions in this approach:
        <li>Social Development</li>
        <li>Personal Development </li>
        <li>Career Development</li>
        <li>Physiological Development</li>
        <li>Emotional Development</li>
        <li>Psychological Development</li>
      </ol>
    </>
  );
}
