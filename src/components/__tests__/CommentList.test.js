import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["comment uno", "comment dos"],
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates on <li> per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows text for each comment", () => {
  expect(wrapped.render().text()).toContain("comment uno");
  expect(wrapped.render().text()).toContain("comment dos");
});
