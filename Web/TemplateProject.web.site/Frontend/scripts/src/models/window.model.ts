import { Server } from "miragejs";
import { Registry } from "miragejs/-types";

// Ensure this is treated as a module.
export {};
declare global {
    interface Window {
        __templateProjectStore: any;
        __templateProjectMockServer: Server<Registry<any, any>>;
    }
}
