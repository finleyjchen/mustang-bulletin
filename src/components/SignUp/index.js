import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
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
  <Row>
    <Col className="text-center" sm={{size: 6, offset:3}}>
    <h1>Create your account</h1>
    <p className="lead">Join an exclusive community for Cal Poly students.</p>
    <SignUpForm history={history} />
    <p>Already have an account? <Link to={routes.SIGN_IN}>Sign in</Link></p>
    </Col>
  </Row>
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
    
        db.doCreateUser(authUser.user.uid, displayname, email, moment())
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
      <Form className="" onSubmit={this.onSubmit}>
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
            
            color="success"
            disabled={isInvalid}
            type="submit"
          >
            Create an account &rarr;
          </Button>
          <FormText>By creating an account, you agree to our <a>terms & conditions.</a></FormText>
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

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
