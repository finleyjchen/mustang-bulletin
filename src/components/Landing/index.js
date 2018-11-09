import React from "react";
import SignUpForm from "../SignUp";
import { Jumbotron, Button, Col, Row, Card, Container, Form, Input, Label, InputGroup } from "reactstrap";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";
import { FiLock, FiBriefcase, FiTrendingUp, FiGitMerge, FiDollarSign } from "react-icons/fi";
import "./index.css";
const LandingPage = () => (
  <Container className="bg-white">
    <Row>
      <div className="w-100 bg-cp p-4">
        <h1 className="display-3 font-weight-bold">Mustang Bulletin        
</h1>
        <small />
        <p className="lead">A local gig board for students, by students.</p>
      </div>

      <div className="w-100 m-auto text-center py-5 bg-white">
<Form className="w-50 m-auto"><Label>Enter your email to sign up for the beta release</Label><InputGroup><Input type="email" placeholder="example@calpoly.edu"/><Button>Sign up</Button></InputGroup></Form>
<br></br>
        <p className="lead mb-0 mt-4">As a student at Cal Poly, you are surrounded by all kinds of valuable skill and talent.</p>
        <p className="h2">Use Mustang Bulletin to share your skills and make money.</p>
        <br />
        </div>

<Col className="py-3 d-none" sm={{size: 8, offset: 2}}>
<small className="d-block text-center">service examples</small>
<hr />
              <div className="testings">
        <ul className="cloud">
<li>bike repair</li>
<li>gardening</li>
<li>hairstyling</li>
<li>events</li>
<li>web design</li>
<li>catering</li>
<li>graphic design</li>
<li>custom art</li>
<li>cooking</li>
<li>handcrafted items</li>
</ul>
        
        </div>
      <hr />
      </Col>
      </Row>

    <Row className="">
      <Col sm={{ size: '5', offset: 1}}>
      <h3><FiLock /> Secure</h3>
      <p>Since you need a verified @calpoly.edu email to create an account, everyone is a Cal Poly student (or affiliated).</p>

      </Col>
      <Col sm={{ size: '4', offset: 1}}>
      <h3><FiDollarSign /> Get paid</h3>
      <p>Get paid while helping another classmate, at any rate you choose.  </p>
      </Col>

      <Col sm={{ size: '5', offset: 1}}>
      <h3><FiTrendingUp /> Gain experience </h3>
      <p>Grow your skills and get experience as you do support your college community.</p>

      </Col>
      <Col sm={{ size: '5', offset: 1}}>
      <h3><FiGitMerge /> Network</h3>
      <p>Meet other students and make lasting connections.</p>
      </Col>


    </Row>


    <Row className="">
    <Col className="text-center my-4" sm={{size: 6, offset:3}}>

    </Col>

    </Row>
  </Container>
);

export default LandingPage;
