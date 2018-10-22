import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  Row,
  Col,
  Container,
  Alert
} from "reactstrap";
const SignInPage = ({ history }) => (
  <Row>
    <Col sm="3" />
    <Col sm="6">
      <h1 className="text-center">Sign In</h1>
      <SignInForm history={history} />
      <PasswordForgetLink />
      <SignUpLink />
    </Col>
    <Col sm="3" />
  </Row>
);
const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <Input
            value={email}
            onChange={event =>
              this.setState(updateByPropertyName("email", event.target.value))
            }
            type="text"
            placeholder="Email Address"
          />
        </FormGroup>
        <FormGroup>
          <Input
            value={password}
            onChange={event =>
              this.setState(
                updateByPropertyName("password", event.target.value)
              )
            }
            type="password"
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <Button block outline disabled={isInvalid} type="submit">
            Sign In
          </Button>
        </FormGroup>
        {error && <Alert color="danger">{error.message}</Alert>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
