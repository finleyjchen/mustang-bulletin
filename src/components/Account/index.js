import React, { Component } from "react";

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import withAuthorization from "../Session/withAuthorization";
import { db } from "../../firebase"
import { Table,Row, Col, Form, Input, Button } from "reactstrap";
import Jobs from "../Jobs";
const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});
class AccountPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      error: null,
      newBio: '',
      major:'',
      gradyear:'',
    }
  }

  onSubmitBio = (event) => {
    const { newBio } = this.state;
    const { uid } = this.props.authUser;
    db.updateUser(uid, "bio", newBio).then(function() {

    }).catch(error => {
      this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  }
  onSubmitMajor = (event) => {
    const { major } = this.state;
    const { uid } = this.props.authUser;
    db.updateUser(uid, "major", major).then(function() {

    }).catch(error => {
      this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  }
  onSubmitGrad = (event) => {
    const { gradyear } = this.state;
    const { uid } = this.props.authUser;
    db.updateUser(uid, "gradyear", gradyear).then(function() {

    }).catch(error => {
      this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  }
render() {

  const {authUser, user} = this.props;
  if(!user) {
    return null
  }
  const { error, newBio, major, gradyear } = this.state;
  return(
      <Row>
        <Col sm="8">


        <h2>Account Details</h2>
        <Table>
          <tbody>
            <tr>
              <th>Name</th>
              <td> {authUser.displayName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{authUser.email}</td>
            </tr>
            <tr>
              <th>Bio</th>
              <td> <Form onSubmit={this.onSubmitBio}>
        <Input
          value={newBio}
          onChange={event =>
            this.setState(
              updateByPropertyName("newBio", event.target.value)
            )
          }
          type="textarea"
          placeholder={user.bio}
          className="mb-2"
        />
                <Button type="submit">
          Save
        </Button>

        { error && <p>{error.message}</p> }</Form>
        
        </td>
            </tr>
            <tr>
              <th>Major</th>
              <td><Form onSubmit={this.onSubmitMajor}>
              <Input value={major}
              onChange={event => this.setState(
                updateByPropertyName("major", event.target.value)
              )}
              type="text"
              placeholder={user.major}
              className="mb-2" />

              <Button type="submit">
              Save</Button>
              </Form></td>
            </tr>
            <tr>
              <th>Grad</th>
              <td><Form onSubmit={this.onSubmitGrad}>
              <Input value={gradyear}
              onChange={event => this.setState(
                updateByPropertyName("gradyear", event.target.value)
              )}
              type="select"
              placeholder={user.gradyear}
              className="mb-2">
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
</Input>
              <Button type="submit">
              Save</Button>
              </Form></td>
            </tr>
            <tr>
              <th>Password</th>
              <td>

                <PasswordForgetForm />
                <PasswordChangeForm />
              </td>
            </tr>
          </tbody>
        </Table>
        </Col>
      </Row>
    );
}
}


    const mapStateToProps = (state) => ({
      authUser: state.sessionState.authUser,
      user: state.sessionState.user
    });
    
    const authCondition = (authUser) => !!authUser;
    
    export default compose(
      withAuthorization(authCondition),
      connect(mapStateToProps)
    )(AccountPage);