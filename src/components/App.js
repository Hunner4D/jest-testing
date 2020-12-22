import React, { Component } from "react";
import CommentBox from "./CommentBox";
import CommentList from './CommentList'

const App = () => {
  return (
  <div className="container">
      <CommentBox />
      <CommentList />
  </div>
  );
};

export default App;
