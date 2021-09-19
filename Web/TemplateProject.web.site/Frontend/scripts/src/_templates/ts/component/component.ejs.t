---
to: ../stencil/components/<%=name%>/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.tsx
---
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: '<%=name%>'
})
export class <%=className%> {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
