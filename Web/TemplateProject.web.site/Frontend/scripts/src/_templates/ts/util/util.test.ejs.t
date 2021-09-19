---
to: ./utils/<%=folder%>/<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>.test.ts
---
import { helloWorld } from "./<%= h.inflection.dasherize(h.inflection.underscore(name, true)) %>";

describe("hello world", () => {
    it("is says hello", () => {
        expect(helloWorld("Hygen")).toEqual("Hello Hygen");
    });
});