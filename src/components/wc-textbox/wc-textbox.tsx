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

  handleTextChange(event: InputEvent) {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => {
      this.emojiText = (event.target as HTMLInputElement).value;
    }, DEBOUNCE_TIME);
  }

  render() {
    return (
      <Fragment>
        <input
          type="text"
          onInput={this.handleTextChange}
          class="textbox"
        ></input>
        <ai-emojis token={this.emojiText} api-key="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" class="ai-emojis" />
      </Fragment>
    );
  }
}
