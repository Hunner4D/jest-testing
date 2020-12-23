import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

afterEach(() => {
    wrapped.unmount();
  });

it("shows component box and list", () => {
  expect(
    wrapped.find(CommentBox).length && wrapped.find(CommentList).length
  ).toEqual(1);
});
