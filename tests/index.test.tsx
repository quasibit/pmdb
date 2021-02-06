import { render } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";

import Home from "@pages/index";

beforeAll(async () => {
  await preloadAll();
});

describe("home", () => {
  test("has h1", async () => {
    expect.assertions(1);

    const { findAllByRole } = render(<Home />);
    const titles = await findAllByRole("heading", { level: 1 });

    expect(titles).toHaveLength(1);
  });
});
