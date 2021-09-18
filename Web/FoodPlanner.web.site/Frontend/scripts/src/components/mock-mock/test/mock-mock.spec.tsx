import { newSpecPage } from "@stencil/core/testing";
import { MockMock } from "../mock-mock";

describe("mock-mock", () => {
    it("renders", async () => {
        const page = await newSpecPage({
            components: [MockMock],
            html: `<mock-mock></mock-mock>`
        });
        expect(page.root).toEqualHtml(`
        <mock-mock>
          <div>
              <h1>
                  It still works
              </h1>
          </div>
        </mock-mock>
    `);
    });
});
