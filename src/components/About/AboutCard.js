import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shaik Sandhani </span> 
            from <span className="purple">India</span>.
            <br />
            I am an aspiring <span className="purple">Artificial Intelligence and 
            Machine Learning Developer</span> with strong interest in creating 
            intelligent systems that solve real-world problems.
            <br />
            I have gained hands-on experience in <span className="purple">
            Machine Learning, Deep Learning, and Data Science</span>, and I am 
            passionate about using AI to build applications that can 
            <span className="purple"> analyze data, make predictions, and shape the future</span>.
            <br />
            <br />
            Beyond coding, I actively explore new technologies and continuously 
            enhance my skills to stay updated in the fast-growing field of AI.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI & ML projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Data Science
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous Learning & Research
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Artificial Intelligence is not about replacing humans, 
            it's about empowering us to create the future."{" "}
          </p>
          <footer className="blockquote-footer">Shaik Sandhani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
