import React from 'react';
import './style.scss';
import useNavigateTo from '@hooks/useNavigateTo';

const LinkTreePage = () => {
  const moveToTree = useNavigateTo('/tree');
  return (
    <div className="linkTreePage" onClick={moveToTree}>
      <span className="linkTreePage__text">Ёлочка</span>
      <div className="linkTreePage__arrow"></div>
    </div>
  );
};

export default LinkTreePage;
