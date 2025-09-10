import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
} from "react-icons/di";
import {
  SiC,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiVisualstudiocode,
  SiMysql,
  SiLinux,
  SiWindows,
  SiAwsamplify,
  SiDocker
} from "react-icons/si";

function Techstack() {
  const skills = [
    { icon: <DiNodejs color="#68A063" />, title: "Node.js", desc: "Runtime Environment" },
    { icon: <SiC color="#00599C" />, title: "C", desc: "Programming Language" },
  { icon: <DiPython color="#3776AB" />, title: "Python", desc: "Programming Language" },
  { icon: <DiMongodb color="#47A248" />, title: "MongoDB", desc: "Database" },
  { icon: <DiJava color="#E76F00" />, title: "Java", desc: "Programming Language" },
  { icon: <SiHtml5 color="#E34F26" />, title: "HTML", desc: "Markup Language" },
  { icon: <SiCss3 color="#1572B6" />, title: "CSS", desc: "Styling Language" },
  { icon: <DiJavascript1 color="#F7DF1E" />, title: "JavaScript", desc: "Programming Language" },
  { icon: <DiReact color="#61DAFB" />, title: "React", desc: "JavaScript Library" },
  { icon: <SiAngular color="#DD0031" />, title: "Angular", desc: "JavaScript Framework" },
  { icon: <SiVisualstudiocode color="#007ACC" />, title: "VSCode", desc: "IDE" },
  { icon: <SiMysql color="#4479A1" />, title: "SQL", desc: "Database Query Language" },
  { icon: <SiLinux color="#FCC624" />, title: "Linux", desc: "Operating System" },
  { icon: <DiPhp color="#777BB4" />, title: "PHP", desc: "Web Development" },
  { icon: <SiWindows color="#0078D6" />, title: "Windows", desc: "Operating System" },
  { icon: <DiGit color="#F05032" />, title: "Git", desc: "Version Control" },
  { icon: <SiDocker color="#2496ED" />, title: "Docker", desc: "Containerization" },
  { icon: <SiAwsamplify color="#FF9900" />, title: "AWS", desc: "Cloud Services" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col key={index} xs={6} md={3} className="tech-icons">
          <div style={{ textAlign: "center", color: "white" }}>
            <div style={{ fontSize: "3rem" }}>{skill.icon}</div>
            <h5>{skill.title}</h5>
            <p style={{ fontSize: "0.9rem", color: "gray" }}>{skill.desc}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
