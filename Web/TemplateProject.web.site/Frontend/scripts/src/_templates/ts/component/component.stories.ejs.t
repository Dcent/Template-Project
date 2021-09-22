---
to: ./components/<%=path%>/<%=componentDashed%>.stories.tsx
---
import { Story } from "@storybook/web-components";
import { <%=component%> } from "./<%=componentDashed%>.component";

export default {
    title: "Components/<%=component%>",
    argTypes: {},
    parameters: {
        actions: {
            handles: ["clickOnUser"]
        }
    }
};

const Template: Story<<%=component%>> = ({ name }) => {
    return `
        <<%=componentDashed%> name="${name}" />
    `;
};

// Default variant
export const Default = Template.bind({});
Default.args = {
    name: "test"
};