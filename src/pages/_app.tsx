import { Provider } from "react-redux";
import { store } from "@ast/redux/store";

import "@ast/styles/globals.css";
import "@ast/styles/404.styles.scss";
import 'react-tooltip/dist/react-tooltip.css'

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
