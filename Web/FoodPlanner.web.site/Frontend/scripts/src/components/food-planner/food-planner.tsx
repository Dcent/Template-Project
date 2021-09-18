import { Component, Host, h } from "@stencil/core";

@Component({
    tag: "food-planner",
    shadow: true
})
export class FoodPlanner {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
