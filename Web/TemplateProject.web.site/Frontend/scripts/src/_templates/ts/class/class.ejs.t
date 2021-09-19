---
to: ./models/<%=folder%>/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.class.ts
---

export class <%=name%> {
    prop: string;
}