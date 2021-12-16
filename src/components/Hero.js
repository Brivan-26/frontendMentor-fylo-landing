import HeroImage from '../images/illustration-1.svg';
import '../styles/hero.css';
const Hero = () => {
  return (
    <section className="flex section__container section hero">
      <div>
        <img src={HeroImage} alt="hero image" />
      </div>
      <div className="hero__content">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="hero__form flex">
          <input type="text" placeholder="Enter your Email" />
          <button className="btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
