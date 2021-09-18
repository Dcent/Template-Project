import { newSpecPage } from '@stencil/core/testing';
import { FoodPlanner } from '../food-planner';

describe('food-planner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FoodPlanner],
      html: `<food-planner></food-planner>`,
    });
    expect(page.root).toEqualHtml(`
      <food-planner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </food-planner>
    `);
  });
});
