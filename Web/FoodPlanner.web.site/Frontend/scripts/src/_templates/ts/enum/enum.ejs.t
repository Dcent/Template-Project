---
to: ./models/enums/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.enum.ts
---
export enum <%=name%> {
    FIRST = "First",
}
