import jestFetchMock from "jest-fetch-mock";

process.env.NODE_ENV = "test";

// Mock fetch function.
jestFetchMock.enableMocks();

// Mock next router.
jest.mock("next/router", () => ({
  useRouter() {
    return {
      basePath: process.env.BASE_PATH || "/",
      pathname: "/",
      route: "/",
      query: {},
      asPath: "/",
      push: jest.fn(async () => await Promise.resolve(true)),
      replace: jest.fn(async () => await Promise.resolve(true)),
      reload: jest.fn(async () => await Promise.resolve(true)),

      prefetch: jest.fn(async () => {
        await Promise.resolve();
      }),

      back: jest.fn(async () => await Promise.resolve(true)),
      beforePopState: jest.fn(async () => await Promise.resolve(true)),
      isFallback: false,

      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    };
  },
}));
