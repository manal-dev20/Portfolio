import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I'm <span className="purple">Manal Mansouri</span> from 
            <span className="purple"> Tangier, Morocco</span>.
            <br />
            I'm currently a digital development student at ISMONTIC.
            <br />
            I specialize in <b className="purple">Full Stack web development</b> and 
            <b className="purple"> graphic design</b>.
            <br />
            I’ve participated in several projects, including a website for a Moroccan association (AMCRA) and a travel planning project.
            <br />
            <br />
            Outside of coding, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creating logos, business cards, and stickers
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in tech events (Hackathons)
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and planning getaways 🌍✈️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always learning, always creating, always progressing."
          </p>
          <footer className="blockquote-footer">Manal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
