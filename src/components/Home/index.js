import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import withAuthorization from "../Session/withAuthorization";
import { db } from "../../firebase";
import "./index.css";
import baffle from "baffle";
import LandingPage from "../Landing";
import { Row, Col, Alert } from "reactstrap";
import Jobs from "../Jobs";
import { Helmet } from "react-helmet";
import ProfileData from "../Session/profileData";
import { FiAlertCircle } from "react-icons/fi";

const Home = ({ authUser, user }) => (
  <div>
    <Helmet>
      <title>Mustang Bulletin - Home</title>
    </Helmet>

    {authUser ? <HomePage user={user} /> : <LandingPage />}
  </div>
);
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    let b = baffle(".baffle");
    return (
      <div>
        <Row>
          <Col sm="12">
          <Alert color="warning  "><FiAlertCircle size="1.2em" /> Mustang Bulletin is in early stages of development. Use at your own risk.</Alert>
          </Col>
        </Row>
        <Row>
          <Col sm="3" className="">

          <ProfileData data={this.props.user} />
          </Col>
          <Col sm="9" className="">
          <Jobs />
          </Col>
        </Row>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  user: state.sessionState.user
});

export default connect(mapStateToProps)(Home);
