import React from 'react';
import './link-tree-page.scss';
import { useNavigate } from 'react-router';

const LinkTreePage = () => {
  const navigate = useNavigate();
  return (
    <div className="linkTreePage" onClick={() => navigate('/tree')}>
      <span className="linkTreePage__text">Ёлочка</span>
      <div className="linkTreePage__arrow"></div>
    </div>
  );
};

export default LinkTreePage;
