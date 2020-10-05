import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#"></a>
        Navbar{" "}
        <span className="badge-pill badge-secondary">
          {this.props.totalCounts}
        </span>
      </nav>
    );
  }
}

export default NavBar;