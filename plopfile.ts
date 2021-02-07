import { NodePlopAPI } from "plop";

import localGenerator from "./.plop/generators/local";
import componentGenerator from "./.plop/generators/component";

/**
 * PLOP configuration.
 *
 * @see https://plopjs.com/
 *
 * @exports
 * @param {NodePlopAPI} plop PLOP API object.
 */
export default function plopSetup(plop: NodePlopAPI) {
  plop.setGenerator("local", localGenerator);
  plop.setGenerator("component", componentGenerator);
}
