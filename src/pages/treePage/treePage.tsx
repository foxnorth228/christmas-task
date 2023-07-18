import React from 'react';
import './treePage.css';
import LeftMenuTreePage from "@components/left-menu-tree-page/left-menu-tree-page";
import Tree from "@components/tree/tree";
import RightMenuTreePage from "@components/right-menu-tree-page/right-menu-tree-page";

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
