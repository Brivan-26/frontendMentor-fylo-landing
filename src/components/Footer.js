import '../styles/footer.css';
import Logo from '../images/logo.svg';
import Phone from '../images/icon-phone.svg';
import Email from '../images/icon-email.svg';
const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container section__container">
        <img src={Logo} alt="logo" />
        <div className="flex footer__content">
          <div className="footer__col">
            <div className="footer__contact">
              <img src={Phone} alt="phone image" />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div className="footer__contact">
              <img src={Email} alt="email image" />
              <p>example@fylo.com</p>
            </div>
          </div>

          <div className="footer__col">
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer__col">
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>

          <div className="footer__col socials">
            <div>
              <i className="fab fa-facebook social"></i>
              <i className="fab fa-twitter social"></i>
              <i className="fab fa-instagram social"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
