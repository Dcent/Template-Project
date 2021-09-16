import { actions, solarViewports, options, initNotes } from "../preview";

export const parameters = {
    actions: actions,
    viewport: solarViewports,
    options: options
};

import "../demo.css";

initNotes();