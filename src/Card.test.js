import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon";


it("renders without crashing", function () {
    render(<Card caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={0}
        totalNum={0} />);
});

it("contains IMG with correct ALT", function () {
    const { container } = render(<Card caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={0}
        totalNum={0} />);

    expect(
        container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
});

it("contains IMG with correct CAPTION", function () {
    const { asFragment, getByText } = render(<Card caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum={0}
        totalNum={0} />);

    expect(getByText("testing image 1")).toBeInTheDocument();
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="Card"
      >
        <h4
          class="Card-title"
        >
          testing image 1
        </h4>
        <img
          alt="testing image 1"
          class="Card-image"
          src="test1.com"
        />
        <small
          class="Card-small"
        >
          Image 0 of 0.
        </small>
      </div>
    </DocumentFragment>
    `);
});
