import '../styles/access.css';
const Access = () => {
  return (
    <section className="access section">
      <div className="section__container flex">
        <div className="access__content">
          <h3>Get early access today</h3>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="access__form">
          <input type="text" placeholder="email@example.com" />
          <div>
            <button className="btn">Get started for free</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Access;
