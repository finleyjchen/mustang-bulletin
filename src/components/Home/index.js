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
import { FiAlertCircle, FiEye, FiBriefcase } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import NewJobModal from "../NewJob/";

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

    this.state = {
      viewJobs: true,
      viewWatchList: false,
      viewMyJobs: false,
    };
  }
  componentDidMount() {}

  render() {
    let b = baffle(".baffle");
    return (
      <div>
        <Row>
          <Col md="12">
            <Alert color="light  ">
              <FiAlertCircle size="1.2em" />{" "}
              <Link to={routes.ACCOUNT}>
                Click here to update your profile &rarr;
              </Link>
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col md="3" className="">
            <NewJobModal />

            <ProfileData data={this.props.user} />
            <ul className="list-group mt-1">
              <a href="#" className="list-group-item">
                <FiBriefcase size="1.2em" /> Your Jobs
              </a>
              <a href="#" className="list-group-item">
                <FiEye size="1.2em" /> WatchList
              </a>
            </ul>
          </Col>
          <Col sm="9" className="">
          {this.state.viewMyJobs ? <MyJobs /> : <Jobs />}

          </Col>
        </Row>
      </div>
    );
  }
}

const MyJobs = ({user}) => {
  return <h1>My Jobs</h1>
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  user: state.sessionState.user
});

export default connect(mapStateToProps)(Home);
