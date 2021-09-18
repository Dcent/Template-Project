import { newE2EPage } from "@stencil/core/testing";

describe("food-planner", () => {
    it("renders", async () => {
        const page = await newE2EPage();
        await page.setContent("<food-planner></food-planner>");

        const element = await page.find("food-planner");
        expect(element).toHaveClass("hydrated");
    });
});
