import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cool-button',
  styleUrl: 'cool-button.css',
  shadow: true,
})
export class CoolButton {
  @Prop() isPrimary: boolean = true;
  @Prop() isDisabled: boolean;
  @Prop() label: string = 'cool button';
  // @Event() buttonClick: EventEmitter<void>;

  // handleClick() {
  //   // Emit a click event when the button is clicked
  //   alert('hi')
  //   console.log('asdfads');
  // }

  private handleClick = () => {
    console.log('Coolbutton click!');
  }

  render() {
    console.log('isPrimary', this.isPrimary);
    return (
      <Host>
        <button class={{ primary: this.isPrimary }} disabled={this.isDisabled}  onClick={this.handleClick}>
          <slot>{this.label}</slot>
      
        </button>
      </Host>
    );
  }
}
