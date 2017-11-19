import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <section className="footer">
        <footer>
          <div className="footer-left">
            <a target="_blank" href="https://github.com/mwchung24">GitHub</a>
            <a target="_blank" href="http://www.martinwchung.com/">Portfolio</a>
            <a target="_blank" href="https://www.linkedin.com/in/martinwchung/">Linkedin</a>
          </div>

          <div className="footer-right">
            Martin Chung © 2017 SelfieGram
          </div>
        </footer>
      </section>
    );
  }
}

export default Footer;
