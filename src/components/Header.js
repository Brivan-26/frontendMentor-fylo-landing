import '../styles/header.css';
import Logo from '../images/logo.svg';
const Header = () => {
  return (
    <header className="header container">
      <img height="40" width="130" src={Logo} alt="logo" />
      <nav className="nav">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </nav>
    </header>
  );
};
export default Header;
