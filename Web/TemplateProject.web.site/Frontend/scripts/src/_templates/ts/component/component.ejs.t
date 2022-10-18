---
to: ./components/<%=path%>/<%=componentDashed%>.component.tsx
---
import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: "<%=componentDashed%>",
    styleUrl: "./<%=componentDashed%>.css"
})
export class <%=component%> {
    // PROPS
    /**
     * name of user
     */
    @Prop() name: string;

    // EVENTS
    /**
     * Description
     */
    @Event() clickOnUser: EventEmitter<string>;

    // LISTEN

    // STATE

    // PRIVATE VARIABLES

    // WATCH

    // LIFECYCLE METHODS
    render() {
        return <div onClick={() => this.clicked()}>{this.name}</div>;
    }

    // PRIVATE METHODS
    private clicked() {
        this.clickOnUser.emit(this.name);
    }
}
