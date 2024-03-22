import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo"><i className="fas fa-utensils" />RETRO</Link>
      <div id="menu-bar" className="fas fa-bars"></div>
      <nav className="navbar">
        <Link to="/" className="menu">home</Link>
        <Link to="/speciality" className="menu">speciality</Link>
        <Link to="/popular" className="menu">popular</Link>
        <Link to="/order" className="menu">Order</Link>
        <Link to="/login" className="menu login">login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
