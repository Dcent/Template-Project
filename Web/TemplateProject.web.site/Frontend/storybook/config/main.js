module.exports = {
    stories: [
        "../../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
        "../../../scripts/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
    ],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-a11y",
        "@storybook/addon-essentials",
        "@storybook/addon-links",
        "@storybook/addon-notes",
        "@storybook/addon-viewport",
        "@whitespace/storybook-addon-html"
    ]
};
