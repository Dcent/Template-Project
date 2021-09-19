import { Component, h, Method, State } from "@stencil/core";
import { getHelloWorld } from "../../services/hello-world/hello-world.service";

@Component({
    tag: "mock-mock"
})
export class MockMock {
    @State() text: string = "";

    componentWillLoad() {
        this.getHelloWorld().then((data) => {
            this.text = data;
        });
    }

    @Method()
    async fetchHelloWorld() {
        return await this.getHelloWorld();
    }

    private getHelloWorld() {
        return getHelloWorld()
            .then(async (response) => {
                if (!response.response.ok) {
                    return "";
                }
                return await response.data[0];
            })
            .catch((e) => {
                console.log(e);
            });
    }
    /*private postHelloWorld(){postHelloWorld()
.then((response) => {
console.log(response);
this.text += " : " + response.data[0];
})
.catch((e) => {
console.log(e);
});}*/

    render() {
        return (
            <div>
                <h1>It still works</h1>
                {this.text}
            </div>
        );
    }
}
