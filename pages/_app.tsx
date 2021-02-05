import type { AppProps } from "next/app";
import { ReactElement } from "react";

function App({ Component, pageProps: pageProperties }: AppProps): ReactElement {
  return <Component {...pageProperties} />;
}

export default App;
