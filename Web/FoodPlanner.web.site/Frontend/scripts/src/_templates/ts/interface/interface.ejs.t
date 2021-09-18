---
to: ./models/<%=folder%>/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.interface.ts
---

export interface <%=name%> {
    prop: string;
}