import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { auth, db } from "../../firebase";
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

const SignUpPage = ({ history }) => (
  <div>
    <h1>Sign Up</h1>
    <p className="lead">Join an exclusive community for Cal Poly students.</p>
    <SignUpForm history={history} />
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  displayname: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { displayname, email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne, displayname)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too

        authUser.user.updateProfile({
          displayName: displayname
        });

        db.doCreateUser(authUser.user.uid, displayname, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });

        authUser.user
          .sendEmailVerification()
          .then(function() {
            // Email sent.
          })
          .catch(function(error) {
            // An error happened.
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { displayname, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      displayname === "" ||
      email.indexOf("@calpoly.edu") === -1;

    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Input
            value={displayname}
            onChange={event =>
              this.setState(
                updateByPropertyName("displayname", event.target.value)
              )
            }
            type="text"
            placeholder="Full Name"
          />
        </FormGroup>
        <FormGroup>
          <Input
            value={email}
            onChange={event =>
              this.setState(updateByPropertyName("email", event.target.value))
            }
            type="text"
            placeholder="Email Address"
          />
          <FormText color="muted">
            Must use a valid Cal Poly email address.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Input
            value={passwordOne}
            onChange={event =>
              this.setState(
                updateByPropertyName("passwordOne", event.target.value)
              )
            }
            type="password"
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <Input
            value={passwordTwo}
            onChange={event =>
              this.setState(
                updateByPropertyName("passwordTwo", event.target.value)
              )
            }
            type="password"
            placeholder="Confirm Password"
          />
        </FormGroup>
        <FormGroup>
          <Button
            block
            outline
            color="primary"
            disabled={isInvalid}
            type="submit"
          >
            Sign Up
          </Button>
        </FormGroup>
        {error && <Alert color="danger">{error.message}</Alert>}
      </Form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

function checkEmail(email) {
  if (email.substring("@") !== "@calpoly.edu") {
    return true;
  }
  return false;
}
export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
