import { Config } from "@stencil/core";
import { stylus } from "@stencil/stylus";

function getGlobalScript(): string {
    if (!process.argv) {
        return "";
    }

    const a = process.argv;
    const filePath = "Frontend/scripts/src/global/";
    let returnValue = `${filePath}polyfills.ts`;

    if (a.indexOf("--static") > -1) {
        returnValue = `${filePath}mockserver-importer`;
    }
    if (a.indexOf("--spec") > -1) {
        returnValue = `${filePath}test-mockserver-importer`;
    }
    return returnValue;
}
export const config: Config = {
    plugins: [
        stylus({
            injectGlobalPaths: ["Frontend/styling/_ITCSS/01_settings/_settings", "Frontend/styling/_ITCSS/02_tools/_tools"]
        })
    ],
    namespace: "scripts",
    taskQueue: "async",
    outputTargets: [
        {
            type: "www",
            dir: "wwwroot/js/stencil/",
            serviceWorker: null // disable service workers
        },
        {
            // Storybook
            type: "www",
            dir: "Frontend/storybook/dist/scripts/stencil/",
            serviceWorker: null // disable service workers
        }
    ],
    buildEs5: false,
    extras: {
        cloneNodeFix: true,
        dynamicImportShim: true
    },
    globalScript: getGlobalScript()
};
