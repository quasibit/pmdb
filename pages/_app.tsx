import type { AppProps } from "next/app";
import { ReactElement } from "react";

import "@styles/globals.css";

/**
 * App component.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 *
 * @param {AppProps} param0 Application properties.
 * @param {any} param0.Component Active page component.
 * @param {any} param0.pageProps Initial page properties preloaded from one of
 * the data fetching methods.
 * @returns {ReactElement} App react element.
 */
function App({ Component, pageProps: pageProperties }: AppProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProperties} />;
}

export default App;
