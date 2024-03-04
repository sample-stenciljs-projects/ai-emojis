import { Component, h } from "@stencil/core";

@Component({
  tag: "ai-emojis",
  styleUrl: "ai-emojis.css",
  scoped: true,
})
export class AiEmojis {
  render() {
    return <span class="emojis"></span>;
  }
}
