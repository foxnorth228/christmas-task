import React from 'react';
import './style.scss';
import useNavigateTo from '@hooks/useNavigateTo';

const LinkToyPage = () => {
  const moveToToys = useNavigateTo('/toys');
  return (
    <div className="linkToyPage" onClick={moveToToys}>
      <div className="linkToyPage__arrow"></div>
      <span className="linkToyPage__text">Игрушки</span>
    </div>
  );
};

export default LinkToyPage;
