import { newSpecPage } from "@stencil/core/testing";
import { TempGeneric } from "../temp-generic.component";

describe("temp-generic", () => {
    it("renders", async () => {
        const page = await newSpecPage({
            components: [TempGeneric],
            html: `<temp-generic/>`
        });
        expect(page.root).toEqualHtml(`
          <temp-generic>
           <div></div>
          </temp-generic>`);
    });
});