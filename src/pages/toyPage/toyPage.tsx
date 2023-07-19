import React from 'react';
import './toyPage.css';
import CardList from '@layouts/cardList/CardList';
import MenuToyPage from '@layouts/menu-toy-page/menu-toy-page';
import LinkTreePage from '@components/linkTreePage/linkTreePage';

function ToyPage() {
  return (
    <div className="page toyPage">
      <MenuToyPage />
      <CardList headerLink={<LinkTreePage />} />
    </div>
  );
}

export default ToyPage;
