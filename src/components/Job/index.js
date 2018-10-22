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
        <Col sm="8">
          {Object.keys(data).map(key => (
            <h1 key={key}>
              {" "}
              {data[key].title}
              <strong className="float-right">
              ${data[key].price}</strong>
              
            </h1>
          ))}
          <JobData data={data} />
        </Col>

        <Col sm="4" className="mt-4">
          <UserData data={data} />
        </Col>
      </Row>
    );
  }
}
const UserData = ({ data }) => (
  <div className="text-center">
    {Object.keys(data).map(key => (
      <div key={key}>
        <p>
          {" "}
          <Link className="profile-link" to={`/students/${data[key].user}`}>
            <img className="profile-img" src={defaultuser} />
            <FiUser /> {data[key].user}
          </Link>
        </p>
        <p>
          <FiCalendar />{" "}
          <Moment format="MMM DD YYYY">{data[key].datePosted}</Moment>
          <hr />
          <a
            className="btn btn-primary d-block"
            href={`mailto:${data[key].user}@calpoly.edu`}
          >
            <FiMail /> Contact
          </a>
        </p>
      </div>
    ))}
  </div>
);

const JobData = ({ data }) => (
  <div>
    {Object.keys(data).map(key => (
      <div key={key}>
        <h1> </h1>
        <hr />
        <p>{data[key].description}</p>
      </div>
    ))}
  </div>
);

export default Job;
