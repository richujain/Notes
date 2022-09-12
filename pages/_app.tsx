import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../store/auth-context";
import { Provider } from 'react-redux';
import store from "../store/index-redux";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
