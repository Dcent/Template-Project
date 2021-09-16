import { addParameters } from '@storybook/client-api';

const viewports = {
    iphone5: {
        name: "iPhone 5",
        styles: {
            height: "568px",
            width: "320px"
        },
        type: "mobile"
    },
    iphone8p: {
        name: "iPhone 6/7/8 Plus",
        styles: {
            height: "736px",
            width: "414px"
        },
        type: "mobile"
    },
    ipad: {
        name: "iPad",
        styles: {
            height: "1024px",
            width: "768px"
        },
        type: "tablet"
    },
    desktop: {
        name: "Desktop",
        styles: {
            height: "800px",
            width: "1280px"
        },
        type: "desktop"
    },
    largeDesktop: {
        name: "Large desktop",
        styles: {
            height: "900px",
            width: "1440px"
        },
        type: "desktop"
    }
};

export const options = {
    storySort: {
        order: ["Intro", "Design System", "Components"]
    }
};

export const solarViewports = {
    viewports: viewports
};

export const actions = { argTypesRegex: "^on[A-Z].*" };

export const initNotes = () => {
    // Migration from addon-notes, from here: https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/recipes.md#migrating-from-notesinfo-addons
    addParameters({
        docs: {
            extractComponentDescription: (component, { notes }) => {
                if (notes) {
                    return typeof notes === 'string' ? notes : notes.markdown || notes.text;
                }
                return null;
            },
        },
    });
};