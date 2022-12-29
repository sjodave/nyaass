import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="dark">
        <h1>About Us</h1>
        <div>
          <b>Our Mission</b> -{" "}
          <i>
            To empower people with integral education for realisation of self
            and well being of nation.
          </i>
        </div>

        <div>
          <b>Our Tagline</b> - स्वात्मानं जानीही। तत् परिवर्तनं भव
        </div>
      </div>
      <div className="plr">
        <div className="dFlex mt-5 row justify-content-around">
          <img
            src="/About us poster.jpg"
            alt=""
            style={{ height: "90vh" }}
            className="col-lg-4 col-sm-8 mb-4"
          ></img>
          <div className="card p-3 col-lg-7 col-sm-12">
            <p>
              (N.Y.A.A.S.S) Nityah Youth Association for Awakening of Self and
              Society" is the name of our organization. N.Y.A.A.S.S focuses on
              the development of the individual as a whole i.e mind, body, heart
              and spirit. Every student and every member has the capacity to
              become the best and this belief leads our work. Greatness is not
              conquered by a high position, a heroic deed or simply by reading
              books. Greatness is conquered by strong character and unique
              creativity. And N.Y.A.A.S.S tries to mind and hence shape this
              greatness amongst the students as well as members. N.Y.A.A.S.S
              means a selfless initiative taken by society for its own well
              being. It is an organization of youth working with the help of
              ideologies of Swami Vivekanand, Yogi Aurobindo, Sir Ken Robinson
              and Stephen Covey and following their principles to know ourselves
              and serve the nation in our best capacities.{" "}
            </p>
            <p>
              " To empower people with integral education for realization of
              self and well being of the nation."
            </p>
            <p>
              Keeping this aim in mind, our organisation works in three
              communities in the Karvenagar area of Pune viz. Sambhanagar,
              Shivane Gosavi Community and Kamana Vasahat.{" "}
            </p>
            <p>
              N.Y.A.A.S.S. is a youth organization which believes in revolution
              with the strongest weapon of Education, sharpened by integrity and
              passion. This passion in the youth group of N.Y.A.A.S.S. does not
              restrict itself only to the formal education sector, but goes
              beyond that and includes the development of the personalities of
              our upcoming generations to serve the best with their interests
              towards our nation.{" "}
            </p>
            <p>
              We at N.Y.A.A.S.S believe that education should be unique in a way
              that it prospers the unique identities of all the students. Once
              an individual is able to know itself, then and only then can it
              aspire to the changes needed in the surrounding/society/nation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
