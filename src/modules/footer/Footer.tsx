import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
      <footer className="footerBody">
        <div className="githubDiv">
          <div className="svgIcon githubIcon"></div>
        </div>
        <div className="yearDiv">
          <span className="yearText">2022</span>
        </div>
        <div className="rsschoolDiv">
          <div className="svgIcon rsschoolIcon"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
