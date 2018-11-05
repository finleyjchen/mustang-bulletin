import React, { Component } from "react";
import { db } from "../../firebase"; // <--- add this line
import withAuthorization from "../Session/withAuthorization";
import {
  Card,
  Badge,
  Input,
  Button,
  ButtonGroup,
  Row,
  Tab,
  Content,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardTitle,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";
import "react-input-range/lib/css/index.css";
import { compose } from "recompose";
import { connect } from "react-redux";
import classnames from "classnames";
import "./index.css";
import Moment from "react-moment";
import { FiCalendar } from "react-icons/fi";
import InputRange from "react-input-range";
class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: {},
      activeTab: "1",
      searchString: "",
      searchType: "all",
      priceRange: { min: 0, max: 1000 },
      sortBy: "price"
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    db.onceGetJobs().then(snapshot =>
      this.setState(() => ({ jobs: snapshot.val() }))
    );
  }

  handleChange = e => {
    this.setState({ searchString: e.target.value });
    console.log({ searchString: e.target.value });
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  searchFilter = e => {
    this.setState({ searchType: e.target.value });
  };

  render() {
    let { jobs, searchType, priceRange, sortBy } = this.state,
      searchString = this.state.searchString.trim().toLowerCase();
    let { min, max } = priceRange;

    if (!jobs) {
      return <div>Loading</div>;
    }
    if (searchString.length > 0) {
      console.log(Object.keys(jobs));
      jobs = Object.keys(jobs)
        .filter(function(key) {
          if (jobs[key].title.toLowerCase().match(searchString))
            return jobs[key];
        })
        .reduce((obj, key) => {
          obj[key] = jobs[key];
          return obj;
        }, {});
    }
    {
      /** search category listener */
    }

    if (searchType == "help") {
      console.log(Object.keys(jobs));
      jobs = Object.keys(jobs)
        .filter(function(key) {
          if (jobs[key].type == 0) return jobs[key];
        })
        .reduce((obj, key) => {
          obj[key] = jobs[key];
          return obj;
        }, {});
    }

    if (searchType == "service") {
      console.log(Object.keys(jobs));
      jobs = Object.keys(jobs)
        .filter(function(key) {
          if (jobs[key].type == 1) return jobs[key];
        })
        .reduce((obj, key) => {
          obj[key] = jobs[key];
          return obj;
        }, {});
    }
    {
      /** priceRange listener */
    }
    jobs = Object.keys(jobs)
      .filter(function(key) {
        if (
          jobs[key].price >= priceRange.min &&
          jobs[key].price <= priceRange.max
        )
          return jobs[key];
      })
      .reduce((obj, key) => {
        obj[key] = jobs[key];
        return obj;
      }, {});

    if (sortBy == "price") {
      jobs = Object.keys(jobs)
        .sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0))
        .reduce((obj, key) => {
          obj[key] = jobs[key];
          return obj;
        }, {});
    }

    return (
      <div>
        <input
          className="search-bar"
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="Search"
        />
        <Nav tabs>
          <NavItem>
            <button
              className={
                (this.state.searchType == "all" ? "active-tab" : "") +
                " category"
              }
              value="all"
              onClick={this.searchFilter}
            >
              All
            </button>
          </NavItem>
          <NavItem>
            <button
              className={
                (this.state.searchType == "help" ? "active-tab" : "") +
                " category"
              }
              value="help"
              onClick={this.searchFilter}
            >
              Help Wanted
            </button>
          </NavItem>

          <NavItem>
            <button
              className={
                (this.state.searchType == "service" ? "active-tab" : "") +
                " category"
              }
              value="service"
              onClick={this.searchFilter}
            >
              Service
            </button>
          </NavItem>
          <InputRange
            maxValue={200}
            minValue={0}
            value={this.state.priceRange}
            onChange={priceRange => this.setState({ priceRange })}
          />
        </Nav>

        {/*<JobList jobs={jobs} />*/}
        <div className="py-4 w-100">
          {Object.keys(jobs).map(key => (
            <Link className="job" key={key} to={`jobs/${jobs[key].url}`}>
              <div className="float-left clearfix w-75">
                <h4>{key}</h4>
                {/*jobs[key].description.substring(0, 50)*/}
                <br />
                <p>
                  {" "}
                  <FiCalendar /> <Moment fromNow>
                    {jobs[key].datePosted}
                  </Moment>{" "}
                  by {jobs[key].user} <TypeBadge typeValue={jobs[key].type} />
                </p>
              </div>
              <div className="float-right clearfix w-25">
                <p className="text-right h1 green">${jobs[key].price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
export const TypeBadge = ({ typeValue }) => {
  if (typeValue == 1) {
    return <Badge color="success">Service</Badge>;
  }
  if (typeValue == 0) {
    return <Badge color="warning">Help Wanted</Badge>;
  }
  return <Badge>No Type</Badge>;
};

const JobList = ({ jobs }) => (
  <div>
    {Object.keys(jobs).map(key => (
      <Link className="job" key={key} to={`jobs/${jobs[key].url}`}>
        <div className="float-left clearfix w-75">
          <h4>{key}</h4>
          {/*jobs[key].description.substring(0, 50)*/}
          <hr />
          <p>
            {" "}
            <FiCalendar />{" "}
            <Moment format="MMM DD">{jobs[key].datePosted}</Moment> by{" "}
            {jobs[key].user} <TypeBadge typeValue={jobs[key].type} />
          </p>
        </div>
        <div className="float-right clearfix w-25">
          <p className="text-right display-4">${jobs[key].price}</p>
        </div>
      </Link>
    ))}
  </div>
);
const mapStateToProps = state => ({
  users: state.userState.users
});

const mapDispatchToProps = dispatch => ({
  onSetUsers: users => dispatch({ type: "USERS_SET", users })
});

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Jobs);
