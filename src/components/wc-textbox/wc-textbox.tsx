import { Component, Fragment, State, h } from "@stencil/core";
const DEBOUNCE_TIME = 300;

@Component({
  tag: "wc-textbox",
  styleUrl: "wc-textbox.css",
  scoped: true,
})
export class WcTextbox {
  @State() emojiText: string;

  private timeoutID;

  private handleTextChange(event: InputEvent) {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => {
      this.emojiText = (event.target as HTMLInputElement).value;
    }, DEBOUNCE_TIME);
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
