import { Provider } from "react-redux"
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Home.css';
import '../styles/Categories.css';
import '../styles/Images.css';
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  console.log('here');
  return <Provider store={store}>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
}
