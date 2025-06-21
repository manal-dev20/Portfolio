import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span>MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with web development and I’ve learned a lot since then. 💻✨
              <br />
              <br />
              I’m skilled in several languages including
              <i>
                <b className="purple"> JavaScript, PHP, HTML/CSS</b>
              </i>
              <br />
              <br />
              My favorite areas are&nbsp;
              <i>
                <b className="purple">modern, interactive websites</b> and projects focused on
                <b className="purple"> user experience and design</b>.
              </i>
              <br />
              <br />
              I mainly use <b className="purple">React.js</b> and
              <i>
                <b className="purple"> Laravel</b>
              </i>
              &nbsp;to build high-performing and elegant applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Manal's avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect with me</span>:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/manal-dev20"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mansouri-manal-8381822b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
