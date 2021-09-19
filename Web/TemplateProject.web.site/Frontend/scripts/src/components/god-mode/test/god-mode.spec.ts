import { newSpecPage } from '@stencil/core/testing';
import { GodMode } from '../god-mode';

describe('god-mode', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GodMode],
      html: `<god-mode></god-mode>`,
    });
    expect(page.root).toEqualHtml(`
      <god-mode>
        <div>Hello world from god-mode</div>
      </god-mode>
    `);
  });
});
