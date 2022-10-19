export default {
    title: "Stencil/MockMock",
    parameters: {
        actions: {
            handles: ["mouseover", "click"]
        }
        // Show Stencil readme file in the notes tab
    }
};
export const Primary = () => {
    return `<temp-generic componet-name="mock-mock" props='${JSON.stringify({
        name: "SIK",
        data: { test: "hello", stencil: "is the way to go" }
    })}'></temp-generic>`;
};
