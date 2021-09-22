let inflection = require("inflection");

module.exports = {
    prompt: ({ inquirer }) => {
        // defining questions in arrays ensures all questions are asked before next prompt is executed
        const questions = [
            {
                type: "input",
                name: "component",
                message: "Name in Pascalcase?",
                initial: "Temp", //Should be replaced with Project name or what ever Prefix you want
                result: (component) => {
                    component = component.replace("Component", "");
                    return component.indexOf("Temp") === -1 ? "Temp" + component : component; // Temp Should be replaced with Project name or what ever Prefix you want
                }
            }
        ];

        return inquirer.prompt(questions).then((answers) => {
            const { component } = answers;
            const question = {
                type: "input",
                name: "path",
                initial: inflection.dasherize(inflection.underscore(component)),
                message: "Path to component (under src/component)"
            };

            return inquirer.prompt(question).then((nextAnswers) =>
                Object.assign({
                    component,
                    path: nextAnswers.path,
                    componentDashed: inflection.dasherize(inflection.underscore(component))
                })
            );
        });
    }
};
