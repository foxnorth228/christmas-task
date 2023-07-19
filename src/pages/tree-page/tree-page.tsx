import React from 'react';
import './tree-page.css';
import LeftMenuTreePage from '@layouts/left-menu-tree-page/left-menu-tree-page';
import Tree from '@layouts/tree/tree';
import RightMenuTreePage from '@layouts/right-menu-tree-page/right-menu-tree-page';

function TreePage() {
  return (
    <>
      <div className="page treePage">
        <LeftMenuTreePage />
        <Tree />
        <RightMenuTreePage />
      </div>
    </>
  );
}

export default TreePage;
