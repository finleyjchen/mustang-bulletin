import React from "react";

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import withAuthorization from "../Session/withAuthorization";
import { Table,Row, Col } from "reactstrap";
import Jobs from "../Jobs";
const AccountPage = ( {authUser}) => (

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



    const mapStateToProps = (state) => ({
      authUser: state.sessionState.authUser,
    });
    
    const authCondition = (authUser) => !!authUser;
    
    export default compose(
      withAuthorization(authCondition),
      connect(mapStateToProps)
    )(AccountPage);