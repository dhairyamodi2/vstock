import "../styles/Accounts/login.css";
import {Provider} from "react-redux"
import type { AppProps } from 'next/app';
import {store} from '../redux/store';

export default function App({ Component, pageProps }: AppProps) {
  console.log('here');
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
