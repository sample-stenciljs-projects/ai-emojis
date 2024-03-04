import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "ai-emojis",
  styleUrl: "ai-emojis.css",
  scoped: true,
})
export class AiEmojis {
  @Prop() text: string;
  render() {
    return <span class="emojis">{this.text}</span>;
  }
}
