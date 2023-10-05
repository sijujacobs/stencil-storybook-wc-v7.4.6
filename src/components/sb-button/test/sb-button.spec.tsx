import { newSpecPage } from '@stencil/core/testing';
import { SbButton } from '../sb-button';

describe('sb-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SbButton],
      html: `<sb-button></sb-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sb-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sb-button>
    `);
  });
});
