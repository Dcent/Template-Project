import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'scripts',
  taskQueue: "async",
  outputTargets: [
    {
      type: 'www',
      dir: "../..//wwwroot/js/stencil/",
      serviceWorker: null, // disable service workers
    },
    {
      // Storybook
      type: "www",
      dir: "../storybook/dist/scripts/stencil/",
      serviceWorker: null // disable service workers
  },
  ],
  buildEs5: true,
  extras: {
    cloneNodeFix: true,
    dynamicImportShim: true
  },
  //globalScript: getGlobalScript()
};
