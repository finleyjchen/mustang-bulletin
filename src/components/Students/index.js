import React, { Component } from "react";

import withAuthorization from "../Session/withAuthorization";
import { connect } from "react-redux";
import { compose } from "recompose";
import { db } from "../../firebase";
import { ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/actions";

class StudentsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUsers().then(snapshot => onSetUsers(snapshot.val()));
  }

  render() {
    const { users } = this.props;

    if (!users) {
      return <div>Loading</div>;
    }
    return (
      <Row>
        <div className="w-100 bg-cp p-4">
          <h1>Students</h1>
          <p className="lead">
            Meet your fellow students registered on Mustang Bulletin
          </p>
        </div>
        {!!users && <UserList users={users} />}
      </Row>
    );
  }
}

const UserList = ({ users }) => (
  <ListGroup className="m-auto w-75">
    {Object.keys(users).map(key => (
      <Link
        className="list-group-item list-group-item-action"
        key={key}
        to={`/students/${users[key].username}`}
      >
        {users[key].displayname} -{" "}
        <span className="text-muted">{users[key].email}</span>
      </Link>
    ))}
  </ListGroup>
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
)(StudentsPage);
