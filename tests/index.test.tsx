import { render } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";

import Home from "@pages/index";

beforeAll(async () => {
  await preloadAll();
});

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });
});
