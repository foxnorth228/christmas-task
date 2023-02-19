import React from 'react';
import './footer.scss';

import GithubIcon from './githubIcon/githubIcon';
import RSSIcon from './rssIcon/rssIcon';
import YearBlock from './yearBlock/yearBlock';

function Footer() {
  return (
    <footer className="footer">
      <GithubIcon />
      <YearBlock />
      <RSSIcon />
    </footer>
  );
}

export default Footer;
