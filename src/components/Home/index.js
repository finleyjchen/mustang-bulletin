import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import withAuthorization from "../Session/withAuthorization";
import { db } from "../../firebase";
import "./index.css";
import baffle from "baffle";
import LandingPage from "../Landing";
import { Helmet } from "react-helmet";

const Home = ({ authUser }) => (
  <div>
    <Helmet>
      <title>Mustang Bulletin - Home</title>
    </Helmet>

    {authUser ? <HomePage /> : <LandingPage />}
  </div>
);
class HomePage extends Component {
  componentDidMount() {}

  render() {
    let b = baffle(".baffle");
    return (
      <div>
        <h1>Home - Logged in</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Home);
