---
to: ../stencil/components/<%=name%>/test/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.e2e.ts
---
import { newE2EPage } from '@stencil/core/testing';

describe('<%=name%>', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<<%=name%>></<%=name%>>');

    const element = await page.find('<%=name%>');
    expect(element).toHaveClass('hydrated');
  });
});
