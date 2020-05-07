// require dependencies
import React, { Component } from "react";
// deconstruct Link from react-router-dom
import { Link } from "react-router-dom";
import "./style.css";

// class component called Nav which extends the Component class within the React npm
class Nav extends Component {
  // declare state
  state = {
    open: false,
    // set width to device width
    width: window.innerWidth
  };

  // method to updateWidth
    // if the user changes the window width, the state is reset
  updateWidth = () => {
    const newState = { width: window.innerWidth };
    // if the user's window is large than 991 pixels, they are unable to collapse the nav bar
    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }
    // sets the state equal to newState
    this.setState(newState);
  };

  // method called toggleNav which allows the user to open or close the navbar
  toggleNav = () => {
    // sets state to open
    this.setState({ open: !this.state.open });
  };

  // equivalent to jquery's document.ready
  // prevents loading until everything is ready
  componentDidMount() {
    // when window size is changed, will run updateWidth
    window.addEventListener("resize", this.updateWidth);
  }

  // removes event listener from window
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  // render method to render the navbar
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/* link routes to root route*/}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        {/* button for hiding/showing the navbar*/}
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* sets up layout for a collapsed navbar is window width is less than 991 pixels*/}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* link for search routes to root route*/}
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              {/* link for saved routes to saved route*/}
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// export as Nav
export default Nav;
