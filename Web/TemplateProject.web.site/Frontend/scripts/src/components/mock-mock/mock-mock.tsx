import { Component, h, State } from "@stencil/core";
import { getHelloWorld, postHelloWorld } from "../../services/hello-world/hello-world.service";

@Component({
    tag: "mock-mock"
})
export class MockMock {
    @State() text: string = "";

    componentWillLoad() {
        this.test();
    }

    private test() {
        getHelloWorld()
            .then((response) => {
                console.log(response);
                this.text += response.data[0];
            })
            .catch((e) => {
                console.log(e);
            });
        postHelloWorld()
            .then((response) => {
                console.log(response);
                this.text += " : " + response.data[0];
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <h1>It still works</h1>
                {this.text}
            </div>
        );
    }
}
