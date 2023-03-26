
import {Provider} from "react-redux"
import type { AppProps } from 'next/app';
import {store} from '../redux/store';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  console.log('here');
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
