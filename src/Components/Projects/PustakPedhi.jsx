import React from "react";
import ImageSlider from "../ImageSlider";
import { pustakPedhi } from "../ImageArray";

export default function PustakPedhi() {
  return (
    <div className="container">
      <h1 id="PustakPedhi">PUSTAK PEDHI</h1>
      <ImageSlider images={pustakPedhi}></ImageSlider>;
      <p>
        “Libraries store the energy that fuels the imagination. They open up
        windows to the world and help us explore and achieve and help us improve
        the quality of life.” -Sidney Sheldon Everything begins with an idea.
        Ideas can be life-changing. Sometimes all you need to open the door is
        just one more good idea. And we did the same thing. We started the
        initiative of "Pustak Pedhi" back in 2019-2020 with a small spark of
        imagination, with a small idea. We understood that for any person to
        rise and shine, and become a better version of themselves, they need to
        go through the tough process of reinventing themselves. And what better
        way to empower someone and help them become a better version of
        themselves than books.
      </p>
      <p>
        Thus began the idea of "Pustak Pedhi" which loosely translates to “Book
        Bank”. Yes, you read that right, a book bank, where you give us your
        time in exchange for an abundance of knowledge and self-growth. The
        campaign‟s mission is to motivate children to read by giving them access
        to age-appropriate books and reading resources, and working with them to
        make reading a fun and beneficial part of their daily lives. Books are a
        great platform to help you with a variety of things. In this world of
        the internet, children are getting lost somewhere. We help them find
        themselves and rekindle the essence of reading. The initiative of
        "Pustak Pedhi" is not just meant for the child reading it, but it also
        inculcates a habit of reading amongst their siblings, their parents,
        their friends, and all their social group.
      </p>
      <p>
        This instills reading as a habit in the entire community in general. And
        a well-read community is an empowered community. And as a cherry on top,
        the libraries that we set up are not just „for the children, but they
        will also be „by the children. This means that the libraries being set
        up will be and be run by one of the residents of the Vasti. The child
        will take care of their library and we will take care of whatever they
        need. These children also keep an eye on inventory, help other children
        find suitable books according to their preferences and also help us
        understand the needs of children better, providing us with the scope to
        improve. And if thoughts such as when, where, and who conducts these
        sessions are still lingering in your mind, then let me clear them for
        you. Currently, we are working on 3 Vasahats in Karvenagar. We are
        working in three places namely San Vasti, Kamana Vasahat, and Gosavi
        Vasti. And we plan to keep on adding more and more books and more and
        more areas to our collection. We have a collection of 900+ books with
        us. Thus, to summarize, "Pustak Pedhi" is an initiative for us to
        inculcate the habit of reading in children, in turn, the community as a
        whole and helping them with all they need for it. We feel if we empower
        the young minds of the community today: we help build a strong,
        wellread, and developed society tomorrow. Because, "Padhega India, Tabhi
        Toh Badhega India."
      </p>
    </div>
  );
}
