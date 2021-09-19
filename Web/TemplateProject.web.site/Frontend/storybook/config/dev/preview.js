import { actions, solarViewports, options, initNotes } from "../preview";

export const parameters = {
    actions: actions,
    viewport: solarViewports,
    options: options
};

import "../demo.css";
import "../../dist/css/app.css";
import { startMirage } from "../../../scripts/src/mock/server";
startMirage({ environment: "development" });

initNotes();
