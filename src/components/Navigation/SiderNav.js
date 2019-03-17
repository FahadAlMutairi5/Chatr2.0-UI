import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

// Components
import ChannelNavLink from "./ChannelNavLink";

class SiderNav extends Component {
  state = { collapsed: false };
  render() {
    const channelLinks = [{ name: "all" }].map(channel => (
      <ChannelNavLink key={channel.name} channel={channel} />
    ));
    return (
      <div class="row">
        <div class="col-3">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a>
              <Link className="nav-brand" to="/welcome">
                {" "}
                FatFit
              </Link>
            </a>
            <a>
              <AuthButton />
            </a>

            <a>
              {" "}
              <Link className="nav-link heading" to="/createChannel">
                <span style={{ fontSize: "23px" }}>
                  <FontAwesomeIcon icon={faPlusCircle} />
                </span>{" "}
                Create Channel
              </Link>{" "}
              {channelLinks}{" "}
            </a>
            <a>
              <span
                className="nav-link text-center"
                id="sidenavToggler"
                onClick={() =>
                  this.setState(prevState => ({
                    collapsed: !prevState.collapsed
                  }))
                }
              >
                <span style={{ fontSize: "23px" }}>
                  <FontAwesomeIcon
                    icon={
                      this.state.collapsed
                        ? faAngleDoubleRight
                        : faAngleDoubleLeft
                    }
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default SiderNav;
