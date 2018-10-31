import React, { Component } from "react";
import { db, auth } from "../../firebase";
import { ListGroup, ListGroupItem, Row, Table, Col, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { FiMail, FiCalendar, FiUser } from "react-icons/fi";
import Moment from "react-moment";
import { TypeBadge } from "../Jobs";
import defaultuser from "./defaultuser.jpg";
import { LinkContainer } from "react-router-bootstrap";
import "./index.css";
class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.match.params.url,
      data: {},
      displayname: ""
    };
  }

  componentDidMount() {
    db.getJob(this.state.url).then(snapshot =>
      this.setState(() => ({ data: snapshot.val() }))
    );
  }
  render() {
    const { data } = this.state;
    return (
      <Row className="">
        <Col sm="12">
          <JobData data={data} />
        </Col>
        <Col sm="12" className="mt-4">
          <UserData data={data} />
        </Col>
      </Row>
    );
  }
}
const UserData = ({ data }) => (
  <div className="">
    {Object.keys(data).map(key => (
      <div className="post-meta">
        <Link className="" to={`/students/${data[key].user}`}>
          <img className="profile-img" src={defaultuser} />
          <span className="pl-1"> {data[key].user}</span>{" "}
        </Link>
        <a
          className="btn btn-primary btn-contact"
          href={`mailto:${data[key].user}@calpoly.edu`}
        >
          <FiMail /> Contact
        </a>
      </div>
    ))}
  </div>
);

const JobData = ({ data }) => (
  <div>
    {Object.keys(data).map(key => (
      <div key={key}>
        <h1 key={key}>
          {data[key].title}
          <span className="float-right green">${data[key].price}</span>
        </h1>{" "}
        <TypeBadge typeValue={data[key].type} />
        {"  "} <FiCalendar />
        <Moment format="MMM DD YYYY">{data[key].datePosted}</Moment>
        <hr />
        <small class="text-muted">Job description</small>
        <p>{data[key].description}</p>
      </div>
    ))}
  </div>
);

export default Job;
