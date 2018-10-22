import React, { Component } from "react";

import withAuthorization from "../Session/withAuthorization";
import { db } from "../../firebase";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
class StudentsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Students</h1>
        <p className="lead">
          A page with students and recent transactions, with maybe a counter for
          how much money has been made/exchanged
        </p>
        {!!users && <UserList users={users} />}
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ListGroup>
    {Object.keys(users).map(key => (
      <ListGroupItem key={key}>
        <Link to={`/students/${users[key].username}`}>
          {users[key].displayname}
        </Link>
      </ListGroupItem>
    ))}
  </ListGroup>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(StudentsPage);
