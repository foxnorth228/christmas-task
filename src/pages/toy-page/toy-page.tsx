import React from 'react';
import './toy-page.scss';
import CardList from '@layouts/card-list/card-list';
import MenuToyPage from '@layouts/menu-toy-page/menu-toy-page';
import LinkTreePage from '@components/LinkTreePage';

function ToyPage() {
  return (
    <div className="page toyPage">
      <MenuToyPage />
      <CardList headerLink={<LinkTreePage />} />
    </div>
  );
}

export default ToyPage;
