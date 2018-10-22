import React from "react";
import SignUpForm from "../SignUp";
import { Jumbotron, Button, Col, Row, Card } from "reactstrap";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
const LandingPage = () => (
  <div>
    <Row>
      <Jumbotron className="w-100 bg-dark text-center text-white">
        <h1 className="display-3">
          <b>Mustang Bulletin</b>
        </h1>
        <p className="display-4">Coming soon</p>
        <p className="lead">A local job board for students, by students.</p>
        <p>Sign ups are exclusive to Cal Poly email addresses (@calpoly.edu)</p>
        <p className="lead">
          <Link to={routes.SIGN_UP}>
            <Button outline className="" size="lg" color="white">
              Sign Up{" "}
            </Button>
          </Link>{" "}
          <Link to={routes.ABOUT}>
            <Button outline className="" size="lg" color="white">
              Learn More{" "}
            </Button>
          </Link>
        </p>
      </Jumbotron>
    </Row>
  </div>
);

export default LandingPage;
