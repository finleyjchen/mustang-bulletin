import React, { Component } from "react";
import { Link } from "react-router-dom";

import AuthUserContext from "../Session/AuthUserContext";
import SignOutButton from "../SignOut";
import { db, auth } from "../../firebase";
import * as routes from "../../constants/routes";
import "./index.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { IoIosClipboard, IoIosPerson } from "react-icons/io";
import { userInfo } from "os";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth user={authUser}/> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

class NavigationAuth extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      user: this.props.user
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentDidMount() {
    db.getUserObject(this.state.user.uid).then(snapshot =>
      this.setState(() => ({ user: snapshot.val() }))
    );
  }

  render() {
    return(

  <Navbar className="mb-4 box-shadow border-bottom">
    <Link className="navbar-brand" to={routes.HOME}>
      <b>MustangBulletin</b>
      <small>alpha</small>{" "}
    </Link>

    <Nav className="navbar-right">
    <NavItem>
        <LinkContainer to={routes.STUDENTS}>
          <NavLink>Students</NavLink>
        </LinkContainer>
      </NavItem>
      <LinkContainer to={routes.JOBS}>
        <NavLink>Jobs</NavLink>
      </LinkContainer>
      <LinkContainer to={routes.NEWJOB}>
        <Button outline color="success">
          New Job +
        </Button>
      </LinkContainer>
        <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  color="white" caret>
          <IoIosPerson size="1.5em" />
          {this.state.user.username}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Signed in as: {this.state.user.username}</DropdownItem>
          <DropdownItem>
            My Bulletin
          </DropdownItem>
          <DropdownItem>          <Link to={routes.ACCOUNT}>
            Account Settings
          </Link></DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={auth.doSignOut}
> Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
        
    </Nav>
  </Navbar>
);}
    }
const NavigationNonAuth = () => (
  <Navbar className="mb-4">
    <Link className="navbar-brand" to={routes.LANDING}>
      {" "}
      <b>MustangBulletin</b>
      <small>alpha</small>{" "}
    </Link>
    <Nav>
      <LinkContainer to={routes.ABOUT}>
        <NavLink>About</NavLink>
      </LinkContainer>

      <LinkContainer to={routes.SIGN_IN}>
        <Button outline color="white">
          Sign In
        </Button>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default Navigation;
