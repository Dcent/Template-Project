---
to: ./utils/<%=folder%>/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.ts
---
export function helloWorld(name: string): string {
    return "Hello " + name;
}
