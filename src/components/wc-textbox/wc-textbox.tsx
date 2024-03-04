import { Component, Fragment, State, h } from "@stencil/core";

@Component({
  tag: "wc-textbox",
  styleUrl: "wc-textbox.css",
  scoped: true,
})
export class WcTextbox {
  @State() emojiText: string;

  private handleTextChange(event: InputEvent) {
    this.emojiText = (event.target as HTMLInputElement).value;
  }

  render() {
    return (
      <Fragment>
        <input type="text" onInput={this.handleTextChange}></input>
        <ai-emojis text={this.emojiText}></ai-emojis>
      </Fragment>
    );
  }
}
