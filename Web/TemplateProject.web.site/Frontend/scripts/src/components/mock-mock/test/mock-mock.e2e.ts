import { newE2EPage } from '@stencil/core/testing';

describe("Ensure mocking of http-requests with MirageJS works with StencilJS", () => {
  it("should fetch products through mock-server", async () => {
    const page = await newE2EPage();
    await page.setContent(`<mock-mock></mock-mock>`);
    await page.waitForChanges();
    const el = await page.find("mock-mock");

    expect(el).not.toBeNull();

    const returnValueFromMethod = await el.callMethod("fetchHelloWorld");

    expect(returnValueFromMethod).toEqual("Hello world");
  });
});

describe('mock-mock', () => {

  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mock-mock></mock-mock>');
    await page.waitForChanges();
    const element = await page.find('mock-mock');
    expect(element).toHaveClass('hydrated');
  });
});

