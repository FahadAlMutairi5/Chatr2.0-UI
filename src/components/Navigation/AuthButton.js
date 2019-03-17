import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

class AuthButton extends Component {
  render() {
    const { user } = this.props;
    //const user = this.props.user;
    let buttons = (
      <span onClick={this.props.logout} className="nav-link">
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </span>
    );

    if (!user) {
      buttons = [
        <li key="loginButton">
          <Link to="/login" className="nav-link">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
        </li>,
        <li key="signupButton">
          <Link to="/signup" className="nav-link">
            <FontAwesomeIcon icon={faUserPlus} /> Signup
          </Link>
        </li>
      ];
    }

    return (
      <ul className=" ">
        <span className="navbar-text">{user && user.username}</span>
        {buttons}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.user };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
