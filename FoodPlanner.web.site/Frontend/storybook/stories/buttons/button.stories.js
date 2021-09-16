import readme from "./readme.md";

export default {
    title: "Design System/Components/Buttons",
    parameters: {
        notes: readme
    },
    argTypes: {
        type: { control: { type: "inline-radio", options: ["primary", "secondary"] } }
    }
};

const Template = (args) => {
    const buttonType = `c-button--${args.type}`;

    let buttonColor = "";
    if (args.buttonColor) {
        buttonColor = `c-button--${args.buttonColor}`;
    }

    const buttonSlim = args.slim ? "c-button--slim" : "";
    const buttonDisabled = args.disabled ? "c-button--disabled" : "";
    const buttonClasses = ["c-button", buttonType, buttonColor, buttonSlim, buttonDisabled].join(" ");
    const disabledAttributes = args.disabled ? ' tabindex="-1" aria-disabled="true"' : "";

    const element = args.isLink ? "a" : "button";
    const href = args.href && args.isLink ? `href="${args.href}" ` : "";

    return `<${element} ${href}class="${buttonClasses}"${disabledAttributes}>${args.buttonText}</${element}>`;
};

export const Primary = Template.bind({});
Primary.args = {
    buttonText: "Primary button",
    type: "primary",
    slim: false,
    disabled: false,
    isLink: false
};

export const PrimaryReverse = Template.bind({});
PrimaryReverse.args = {
    buttonText: "Primary reverse button",
    type: "primary-reverse",
    buttonColor: "green",
    slim: false,
    disabled: false,
    isLink: false
};
PrimaryReverse.argTypes = {
    buttonColor: {
        control: {
            type: "inline-radio",
            options: ["green", "leafy-green", "blue", "steel-blue", "solar-blue", "yellow", "brass-yellow", "orange", "red", "black"]
        }
    }
};

export const Secondary = Template.bind({});
Secondary.args = {
    buttonText: "Secondary button",
    type: "secondary",
    slim: false,
    disabled: false,
    isLink: false
};

export const Disabled = Template.bind({});
Disabled.args = {
    buttonText: "Disabled button",
    type: "primary",
    slim: false,
    disabled: true,
    isLink: false
};

export const Link = Template.bind({});
Link.args = {
    buttonText: "Link",
    type: "primary",
    slim: false,
    disabled: false,
    isLink: true,
    href: "https://solar.dk"
};

export const WithPopupWrapper = () => {
    return `
        <div class="u-position-relative">
            <button class="c-button c-button--primary">With popup menu</button>
            <div class="c-button__popup-wrapper">
                content for wrapper here
            </div>
        </div>
    `;
};
WithPopupWrapper.args = {};
