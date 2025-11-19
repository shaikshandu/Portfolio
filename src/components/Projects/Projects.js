import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/images.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="This project implements real-time object detection using YOLO. It captures live video and detects objects like people, cars, bottles, chairs, etc. using webcam feed and COCO dataset."
              ghLink="https://github.com/shaikshandu/Real-Time-Object-Detection-With-OpenCV-master"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using the FER-2013 dataset with Keras and TensorFlow. Integrated with OpenCV for live face detection. Achieved 60.1% accuracy in predicting emotions."
              ghLink="https://github.com/shaikshandu/RealFace_And_Emotion_Detection"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
