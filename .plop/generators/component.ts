import { PlopGeneratorConfig } from "node-plop";

const componentGenerator: PlopGeneratorConfig = {
  description: "Create component",

  prompts: [
    {
      type: "input",
      name: "name",
      message: "Name of the component:",
    },
  ],

  actions: [
    {
      type: "add",
      path: "components/{{kebabCase name}}/{{pascalCase name}}.styles.ts",
      templateFile: ".plop/templates/component/Component.styles.ts.hbs",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      skipIfExists: true,
    },
    {
      type: "add",
      path: "components/{{kebabCase name}}/{{pascalCase name}}.test.tsx",
      templateFile: ".plop/templates/component/Component.test.tsx.hbs",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      skipIfExists: true,
    },
    {
      type: "add",
      path: "components/{{kebabCase name}}/{{pascalCase name}}.tsx",
      templateFile: ".plop/templates/component/Component.tsx.hbs",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      skipIfExists: true,
    },
    {
      type: "add",
      path: "components/{{kebabCase name}}/{{pascalCase name}}.type.ts",
      templateFile: ".plop/templates/component/Component.type.ts.hbs",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      skipIfExists: true,
    },
    {
      type: "add",
      path: "components/{{kebabCase name}}/index.ts",
      templateFile: ".plop/templates/component/index.ts.hbs",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      skipIfExists: true,
    },
  ],
};

export default componentGenerator;
