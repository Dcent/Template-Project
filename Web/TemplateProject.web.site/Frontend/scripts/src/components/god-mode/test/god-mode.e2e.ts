import { newE2EPage } from '@stencil/core/testing';

describe('god-mode', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<god-mode></god-mode>');

    const element = await page.find('god-mode');
    expect(element).toHaveClass('hydrated');
  });
});
