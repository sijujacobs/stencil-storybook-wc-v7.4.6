import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';

const meta: Meta = {
  component: 'sb-button',
};
export default meta;

type Story = StoryObj;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/web-components/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => html`<sb-button .background="#ff0" .label="Button"></sb-button>`,
};

export const Secondary: Story = {
  render: () => html`<sb-button .background="#ff0" .label="😄👍😍💯"></sb-button>`,
};

export const Tertiary: Story = {
  render: () => html`<sb-button .background="#ff0" .label="📚📕📈🤓"></sb-button>`,
};