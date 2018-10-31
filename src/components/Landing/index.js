import React from "react";
import SignUpForm from "../SignUp";
import { Jumbotron, Button, Col, Row, Card } from "reactstrap";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
const LandingPage = () => (
  <div>
    <Row>
      <div className="w-100 bg-cp p-4">
        <h1 className="display-3">Mustang Bulletin</h1>
        <small />
        <p className="lead">A local job board for students, by students.</p>
      </div>

      <div className="w-100 text-center py-4">
        <p className="display-4">Coming soon</p>

        <p className="lead">
          Sign ups are exclusive to Cal Poly email addresses (@calpoly.edu)
        </p>
        <p className="lead">
          <Link to={routes.SIGN_UP}>
            <Button className="" size="lg" color="success">
              Sign Up{" "}
            </Button>
          </Link>{" "}
          <Link to={routes.ABOUT}>
            <Button className="" size="lg" color="secondary">
              Learn More{" "}
            </Button>
          </Link>
        </p>
      </div>
    </Row>
  </div>
);

export default LandingPage;
