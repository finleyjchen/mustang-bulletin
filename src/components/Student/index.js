import React, { Component } from "react";
import { db, auth } from "../../firebase";
import { ListGroup, ListGroupItem, Row, Table, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.match.params.username,
      data: {},
      displayname: ""
    };
  }

  componentDidMount() {
    db.getUser(this.state.username).then(snapshot =>
      this.setState(() => ({ data: snapshot.val() }))
    );
  }
  render() {
    const { data } = this.state;
    return (
      <Row className="">
        <Col sm="6">
          <StudentData data={data} />
        </Col>
      </Row>
    );
  }
}

const StudentData = ({ data }) => (
  <div>
    {Object.keys(data).map(key => (
      <div>
        <h1 key={key}>
          {data[key].displayname}
          's Profile
        </h1>
        <Table key={key}>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{data[key].displayname}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                {data[key].email}{" "}
                <a
                  className="btn btn-primary btn-sm"
                  href={`mailto:${data[key].email}`}
                >
                  <FiMail />
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    ))}
  </div>
);

export default Student;
