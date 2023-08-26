import React from "react";
class Footer extends React.Component {
  state = {};
  render() {
    return (
      <section className="footer">
        <div className="share">
          <a href="https://facebook.com" target="_blank" className="btn">
            facebook
          </a>
          <a href="https://twitter.com" target="_blank" className="btn">
            twitter
          </a>
          <a href="https://instagram.com" target="_blank" className="btn">
            instagram
          </a>
          <a href="https://pinterest.com" target="_blank" className="btn">
            pinterest
          </a>
          <a href="https://linkedin.com" target="_blank" className="btn">
            linkedin
          </a>
        </div>

        <h1 class="credit">
          created by <span> M Farooq </span> | all rights reserved!
        </h1>
      </section>
    );
  }
}

export default Footer;
