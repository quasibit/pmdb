import type { AppProps } from "next/app";
import { ReactElement } from "react";

import "@styles/globals.css";

function App({ Component, pageProps: pageProperties }: AppProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProperties} />;
}

export default App;
