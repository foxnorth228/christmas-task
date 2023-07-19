import React from 'react';
import './right-menu-tree-page.scss';
import SelectorToys from "@components/selectors/selector-toys/selector-toys";
import SelectorDecoratedTree from "@components/selectors/selector-decorated-tree/selector-decorated-tree";

const RightMenuTreePage = () => {
  return (
    <div className="rightMenuTreePage">
      <SelectorToys />
      <SelectorDecoratedTree />
    </div>
  );
};

export default RightMenuTreePage;
