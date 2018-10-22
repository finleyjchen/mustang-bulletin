import React from "react";
import { FiHeart } from "react-icons/fi";

import { Row, Col, Card } from "reactstrap";

const AboutPage = () => (
  <div>
    <Row className="py-4 mb-4">
      <Col className="" sm={{ size: 6, offset: 3 }}>
        <h4>
          Mustang Bulletin is an exclusive job board for Cal Poly students to
          work for each other.
        </h4>
      </Col>
    </Row>
    <Row>
      <Col sm={{ size: 6, offset: 3 }}>
        <h4>How it works</h4>
        <ul>
          <li>
            Fulfill jobs or provide work for other students and gain reputation
          </li>
          <li>
            When providing a job or working a job, gain credibility by rating
            your interactions with other students.
          </li>
          <li>
            Better your skills, get stuff done for you, and network with other
            students
          </li>
          <li>Secure messaging platform for contacting other students</li>
        </ul>
        <hr></hr>
      </Col>
    </Row>
    <Row>
      <Col sm={{ size: 6, offset: 3 }}>
      <p className="text-center">Created with <FiHeart color="red" /> by{" "}
    <a href="https://fjchen.net"> Finley Chen</a></p>
      </Col>
    </Row>
  </div>
);

export default AboutPage;
