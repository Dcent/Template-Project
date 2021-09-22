---
to: ./components/<%=path%>/test/<%=componentDashed%>.component.spec.tsx
---
import { newSpecPage } from "@stencil/core/testing";
import { <%=component%> } from "../<%=componentDashed%>.component";

describe("<%=componentDashed%>", () => {
    it("renders", async () => {
        const page = await newSpecPage({
            components: [<%=component%>],
            html: `<<%=componentDashed%>/>`
        });
        expect(page.root).toEqualHtml(`
          <<%=componentDashed%>>
           <div></div>
          </<%=componentDashed%>>`);
    });
});