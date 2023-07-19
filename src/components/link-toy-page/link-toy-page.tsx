import React from 'react';
import './link-toy-page.scss';
import { useNavigate } from 'react-router';

const LinkToyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="linkToyPage" onClick={() => navigate('/toys')}>
      <div className="linkToyPage__arrow"></div>
      <span className="linkToyPage__text">Игрушки</span>
    </div>
  );
};

export default LinkToyPage;
