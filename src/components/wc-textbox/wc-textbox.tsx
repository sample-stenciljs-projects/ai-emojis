import { Component, Fragment, h } from "@stencil/core";

@Component({
  tag: "wc-textbox",
  styleUrl: "wc-textbox.css",
  scoped: true,
})
export class WcTextbox {
  render() {
    return (
      <Fragment>
        <input type="text"></input>
        <ai-emojis text=""></ai-emojis>
      </Fragment>
    );
  }
}
