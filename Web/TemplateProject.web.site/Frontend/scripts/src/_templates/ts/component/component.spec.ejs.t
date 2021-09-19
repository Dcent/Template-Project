---
to: ../stencil/components/<%=name%>/test/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.spec.ts
---
import { newSpecPage } from '@stencil/core/testing';
import { <%=className%> } from '../<%=name%>';

describe('<%=name%>', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [<%=className%>],
      html: `<<%=name%>></<%=name%>>`,
    });
    expect(page.root).toEqualHtml(`
      <<%=name%>>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </<%=name%>>
    `);
  });
});
