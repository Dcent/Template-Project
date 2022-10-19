import { Component, h, Method, Prop, State } from "@stencil/core";
import { getHelloWorld } from "../../services/hello-world/hello-world.service";

@Component({
    tag: "mock-mock"
})
export class MockMock {
    @Prop() name: string;
    @Prop() data: any;
    @State() text: string = "";

    componentWillLoad() {
        this.getHelloWorld().then((data) => {
            this.text = data;
        });
        console.log(this.data);
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
                {this.name}
                <h1 class="text-3xl font-bold underline">Hello world!</h1>
            </div>
        );
    }
}
