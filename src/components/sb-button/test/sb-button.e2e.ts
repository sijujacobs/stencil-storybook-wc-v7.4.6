import { newE2EPage } from '@stencil/core/testing';

describe('sb-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sb-button></sb-button>');

    const element = await page.find('sb-button');
    expect(element).toHaveClass('hydrated');
  });
});
