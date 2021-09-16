/////////////////// DOCUMENTATION ////////////////////////
//                                                      //
// https://eslint.org/docs/user-guide/getting-started   //
//                                                      //
//////////////////////////////////////////////////////////

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [/*"eslint:recommended", "plugin:@typescript-eslint/recommended",*/ "prettier"],
    env: {
        browser: true,
        es6: true,
        jest: true,
        jquery: true,
        mocha: true
    },
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: "module"
    },

    // Globals: https://eslint.org/docs/user-guide/configuring#specifying-globals
    globals: {
        angular: true,
        $: true,
        module: true,
        inject: true,
        global: true,
        dtrum: true,
        dataLayer: true,
        hj: true
    },

    // Rules: https://eslint.org/docs/rules/
    rules: {
        "space-before-blocks": ["warn", "always"],
        curly: ["warn"],
        eqeqeq: "warn",
        "no-const-assign": "error"
    },
    overrides: [
        // {
        //     files: ["./frontend/scripts/stencil/**/*.tsx"],
        //     rules: {
        //         "no-unused-vars": "error"
        //     }
        // }
        // {
        //     files: ["./frontend/scripts/stencil/**/*.tsx"],
        //     rules: {
        //         "no-unused-vars": ["error", { varsIgnorePattern: "h" }]
        //     }
        // }
    ]
};
