import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import amcraImg from "../../Assets/Projects/amcra.png"; // Put your project image here
import tripPlannerImg from "../../Assets/Projects/tripplanner.png"; // Also put your image here

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Completed Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I’ve worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* AMCRA Project */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={amcraImg}
              isBlog={false}
              title="AMCRA Website"
              description="Full development of a showcase website for the Moroccan association AMCRA. Project completed during an internship at a digital agency. Technologies used: HTML, CSS, JavaScript, React.js, and version control with GitHub."
              ghLink="https://github.com/abd733/ASSOCIATION_LARAVEL.git" // Replace if necessary
               // Replace with your real link
            />
          </Col>

          {/* TripPlanner Project */}
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tripPlannerImg}
              isBlog={false}
              title="TripPlanner"
              description="Final year project: a trip planning platform. Full integration of frontend and backend tools: React.js, Laravel, SQL, and UI design created in Figma."
              ghLink="https://github.com/Yousra-akg/voyage-planner.git" // Replace if necessary
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
