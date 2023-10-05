
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sb-button',
  styleUrl: 'sb-button.css',
  shadow: true,
})
export class SbButton {
  @Prop() cName: string = '';
  @Prop() size: string = '';
  @Prop() label: string = '';
  @Prop() isDisabled: boolean = false;

  render() {
    return (
      <button
        class={`sb-button ${this.cName} ${this.size}`} disabled={this.isDisabled}>
        {this.label + "----------" + this.isDisabled}
      </button>
    );
  }
}
