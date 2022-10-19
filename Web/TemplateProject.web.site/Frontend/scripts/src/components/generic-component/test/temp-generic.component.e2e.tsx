import { newE2EPage } from "@stencil/core/testing";

describe("temp-generic", () => {
    it("renders", async () => {
        const page = await newE2EPage();
        await page.setContent("<temp-generic/>");

        const element = await page.find("temp-generic");
        expect(element).toHaveClass("hydrated");
    });
});