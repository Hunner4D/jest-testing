import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import CommentBox from "../CommentBox";

it("shows a component box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  //   console.log(div.innerHTML);
  expect(div.innerHTML).toContain("beard");

  ReactDOM.unmountComponentAtNode(div);
});
