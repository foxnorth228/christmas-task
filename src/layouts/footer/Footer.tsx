import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="githubBlock">
        <div className="githubBlock__icon"></div>
      </div>
      <div className="yearBlock">
        <span className="yearBlock__text">2022</span>
      </div>
      <div className="rsschoolBlock">
        <div className="rsschoolBlock__icon"></div>
      </div>
    </footer>
  );
}

export default Footer;
