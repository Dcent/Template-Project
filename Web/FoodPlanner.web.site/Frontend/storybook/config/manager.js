import { addons } from "@storybook/addons";
import Theme from "./Theme";

export const setConfig = () => {
    addons.setConfig({
        theme: Theme
    });
};
