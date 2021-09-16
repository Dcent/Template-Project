import { newE2EPage } from '@stencil/core/testing';
describe('mock-mock', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<mock-mock></mock-mock>');
        const element = await page.find('mock-mock');
        expect(element).toHaveClass('hydrated');
    });
});
