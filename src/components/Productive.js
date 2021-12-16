import '../styles/productive.css';
import Img from '../images/illustration-2.svg';
import Quote from '../images/icon-quotes.svg';
import QuoteOwner from '../images/avatar-testimonial.jpg';
import RightArrow from '../images/icon-arrow.svg';
const Productive = () => {
  return (
    <section className="productive section">
      <div className="productive__container flex section__container">
        <img src={Img} alt="productive image" />
        <div className="productive__content">
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>

          <div className="how__works">
            <div className="how__works__container">
              <a href="#">See how Fylo works</a>
              <img src={RightArrow} alt="right arrow" />
            </div>
          </div>
          <div className="productive__review">
            <img className="review__quote" src={Quote} alt="productive quote" />
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="quote__owner">
              <img src={QuoteOwner} alt="" />
              <div className="owner__profile">
                <h3>Kyle Burton</h3>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productive;
