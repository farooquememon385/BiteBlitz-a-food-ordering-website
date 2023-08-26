import React from "react";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <a href="/" className="logo">
          <i class="fas fa-utensils"></i>RETRO
        </a>
        <div id="menu-bar" className="fas fa-bars"></div>

        <nav className="navbar">
          <a className="menu" href="/">
            home
          </a>
          <a className="menu" href="/speciality">
            speciality
          </a>
          <a className="menu" href="/popular">
            popular
          </a>
          <a href="/order" className="menu">
            Order
          </a>
          <a className="menu login" href="/login">
          
            login
          </a>
        </nav>
      </header>
    );
  }
}

export default Navbar;
