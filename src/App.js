import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

// Scripts
import main from "./assets/js/main";

// Components
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import ChannelForm from "./components/ChannelForm";
import SiderNav from "./components/Navigation/SiderNav";

class App extends Component {
  componentDidMount() {
    this.props.checkForExpiredToken();
    main();
  }

  render() {
    return (
      <div className="content-wrapper">
        <SiderNav />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/(login|signup)" component={RegistrationForm} />
          <Route path="/createChannel" component={ChannelForm} />
          <PrivateRoute path="/private" component={SuperSecretPage} />

          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
