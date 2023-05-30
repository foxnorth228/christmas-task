import React from 'react';
import './footer.scss';

import GithubIcon from '../../components/githubIcon/githubIcon';
import RSSIcon from '../../components/rssIcon/rssIcon';
import YearBlock from '../../components/yearBlock/yearBlock';

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
