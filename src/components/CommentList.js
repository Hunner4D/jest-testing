import React, { Component } from 'react';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ryan: "beard",
    };
  }
  render() {
    return <div>{this.state.ryan}</div>;
  }
}

export default CommentList;