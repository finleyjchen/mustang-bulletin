import React from "react";

import AuthUserContext from "../Session/AuthUserContext";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import withAuthorization from "../Session/withAuthorization";
import { Table,Row, Col } from "reactstrap";
import Jobs from "../Jobs";
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
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
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
