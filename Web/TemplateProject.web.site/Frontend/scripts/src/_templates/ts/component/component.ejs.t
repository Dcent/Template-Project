---
to: ./components/<%=name%>/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.tsx
---
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: '<%=name%>',
  styleUrl: './<%=name%>.styl'
})
export class <%=className%> {

  render() {
    return (
      <div>Hello world from <%=name%></div>
    );
  }

}
