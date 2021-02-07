import { PlopGeneratorConfig } from "node-plop";

const localGenerator: PlopGeneratorConfig = {
  description: "Create local .env file",

  prompts: [],

  actions: [
    {
      type: "add",
      path: ".env.local",
      templateFile: ".plop/templates/local/.env.local.hbs",
      // eslint-disable-next-line @typescript-eslint/naming-convention
      skipIfExists: true,
    },
  ],
};

export default localGenerator;
