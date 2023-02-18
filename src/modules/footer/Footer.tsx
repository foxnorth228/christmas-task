import React from 'react';
import './footer.css';
import GithubIcon from './githubIcon/githubIcon';
import RSSIcon from './rssIcon/rssIcon';
import YearBlock from './yearBlock/yearBlock';

function Footer() {
  return (
    <>
      <footer className="footerBody">
        <GithubIcon />
        <YearBlock />
        <RSSIcon />
      </footer>
    </>
  );
}

export default Footer;
