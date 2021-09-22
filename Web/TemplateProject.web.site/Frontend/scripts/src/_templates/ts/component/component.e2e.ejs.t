---
to: ./components/<%=path%>/test/<%=componentDashed%>.component.e2e.tsx
---
import { newE2EPage } from "@stencil/core/testing";

describe("<%=componentDashed%>", () => {
    it("renders", async () => {
        const page = await newE2EPage();
        await page.setContent("<<%=componentDashed%>/>");

        const element = await page.find("<%=componentDashed%>");
        expect(element).toHaveClass("hydrated");
    });
});