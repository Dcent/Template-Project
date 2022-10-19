import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "temp-generic"
})
export class TempGeneric {
    // PROPS
    /**
     * name of user
     */
    @Prop() componetName: string;

    @Prop() props: string;

    // EVENTS

    // LISTEN

    // STATE

    // PRIVATE VARIABLES
    private _propsJson: any = {};

    // WATCH

    // LIFECYCLE METHODS
    componentWillLoad() {
        try {
            if (this.props) {
                this._propsJson = JSON.parse(this.props);
            }
        } catch {
            console.error("The JSON parse failed do to wrong JSON data");
        }
    }

    render() {
        return <div>{<this.componetName {...this._propsJson} />}</div>;
    }

    // PRIVATE METHODS
}
