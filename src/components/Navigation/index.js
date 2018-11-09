import React, { Component } from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import { db, auth } from "../../firebase";
import { connect } from "react-redux";

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
  DropdownMenu,
  UncontrolledDropdown,
  Container
} from "reactstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FiUsers, FiUser, FiBell } from "react-icons/fi";

const Navigation = ({ authUser, user }) => (
  <div>{authUser ? <NavigationAuth user={user} /> : <NavigationNonAuth />}</div>
);

class NavigationAuth extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNotif = this.toggleNotif.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
      activeTab: null
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleNotif() {
    this.setState({ dropdownOpen2: !this.state.dropdownOpen2 });
  }

  componentDidMount() {}

  render() {
    var user = "";
    if (this.props.user) {
      var user = this.props.user;
    }
    return (
      <Navbar className="mb-4 box-shadow border-bottom">
        <Container>
          <Link className="navbar-brand" to={routes.HOME}>
            <b>MB</b>
            
          </Link>
          <Nav className="mr-auto">
            <LinkContainer to={routes.JOBS}>
              <NavLink>Jobs</NavLink>
            </LinkContainer>
          </Nav>

          <Nav className="float-left">
            <UncontrolledDropdown
              nav
              isOpen={this.state.dropdownOpen2}
              toggle={this.toggleNotif}
            >
              <DropdownToggle nav>
                <FiBell size="1.5em" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>Notifications</DropdownItem>

                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>

            <LinkContainer to={routes.STUDENTS}>
              <NavLink>
                <FiUsers size="1.5em" />
              </NavLink>
            </LinkContainer>

            <UncontrolledDropdown
              nav
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle nav>
                <FiUser size="1.5em" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem header>
                  Signed in as: {user.displayname}
                </DropdownItem>
                <Link className="dropdown-item" to={routes.ACCOUNT}>
                  Account Settings
                </Link>
                <DropdownItem divider />
                <DropdownItem onClick={auth.doSignOut}> Sign Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
const NavigationNonAuth = () => (
  <Navbar className=" border-bottom">
    <Container>
      <Link className="navbar-brand" to={routes.HOME}>
        <b>MB</b>
        
      </Link>
      <Nav>
        <LinkContainer to={routes.ABOUT}>
          <NavLink>About</NavLink>
        </LinkContainer>

        <LinkContainer to={routes.SIGN_IN}>
          <NavLink>Sign In</NavLink>
        </LinkContainer>
        <LinkContainer to={routes.SIGN_UP}>
          <NavLink active>Create Account</NavLink>
        </LinkContainer>
      </Nav>
    </Container>
  </Navbar>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser,
  user: state.sessionState.user
});

export default connect(mapStateToProps)(Navigation);
