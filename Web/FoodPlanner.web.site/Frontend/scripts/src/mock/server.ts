import { createServer, Response } from "miragejs";
interface MirageConfig {
    environment: string;
}

export function startMirage(config: MirageConfig = { environment: "development" }) {
    // Make sure to exit, and return the existing instance, if there is already an existing mockserver instance created
    if (window.__foodPlannerMockServer) {
        return window.__foodPlannerMockServer;
    }

    if (config.environment !== "test") {
        console.log(
            "%cFood Planner%c [MockServer]: Starting mock-server",
            "color:white; font-weight: bold;background-color:#003264; padding: 15px 10px;",
            "font-weight: bold;font-size: 11px;"
        );
    }

    const server = createServer({
        environment: config.environment,

        /*models: {
            price: Model,
            productList: Model,
            limitedAssortment: Model,
            limitedAssortmentActor: Model
        },

        factories: {
            productList: productListFactory,
            limitedAssortment: limitedAssortmentFactory,
            limitedAssortmentActor: limitedAssortmentActorFactory
        },

        seeds(server) {
            server.create("price", price_1000401981);
            server.create("price", price_1000390572);
            server.createList("productList", 24);
            server.createList("limitedAssortment", 24);
            server.createList("limitedAssortmentActor", 24);
        },*/

        routes() {
            // POC
            this.namespace = "/api/";

            this.get("hello/World", () => {
                return new Response(200, {}, ["Hello world"]);
            });

            this.get("hello/Space", () => {
                return new Response(200, {}, ["Hello from outer space"]);
            });

            // Passthrough/whitelist these URLS
            this.passthrough("http://localhost:8080/**");
            this.passthrough("http://localhost:4444/**");
        }
    });

    window.__foodPlannerMockServer = server;

    return server;
}
