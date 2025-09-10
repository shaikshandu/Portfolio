import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJupyter,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiAnaconda,
  SiVisualstudiocode,
  SiGooglecolab,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiJupyter color="#F37626" size={75} />, name: "Jupyter Notebook" },
    { icon: <SiTensorflow color="#FF6F00" size={75} />, name: "TensorFlow" },
    { icon: <SiPytorch color="#EE4C2C" size={75} />, name: "PyTorch" },
    { icon: <SiKeras color="#D00000" size={75} />, name: "Keras" },
    { icon: <SiPandas color="#150458" size={75} />, name: "Pandas" },
    { icon: <SiNumpy color="#013243" size={75} />, name: "NumPy" },
    { icon: <SiAnaconda color="#44A833" size={75} />, name: "Anaconda" },
    { icon: <SiVisualstudiocode color="#007ACC" size={75} />, name: "VS Code" },
    { icon: <SiGooglecolab color="#F9AB00" size={75} />, name: "Google Colab" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      {tools.map((tool, index) => (
        <Col
          xs={6}
          md={3}
          className="tech-icons"
          key={index}
          style={{ textAlign: "center", marginBottom: "15px" }}
        >
          {tool.icon}
          <p
            style={{
              marginTop: "8px",
              fontSize: "14px",
              fontWeight: "500",
              color: "white",
            }}
          >
            {tool.name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
