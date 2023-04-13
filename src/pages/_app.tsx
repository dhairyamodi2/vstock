import { Provider, useDispatch } from "react-redux"
import type { AppProps } from 'next/app';
import { allActions, store } from '../redux/store';
import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Home.css';
import '../styles/Categories.css';
import '../styles/Images.css';
import '../styles/Details.css';
import '../styles/Payments.css';
import { ChakraProvider } from "@chakra-ui/react";
import { bindActionCreators } from "redux";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <ChakraProvider>
      <Component {...pageProps}/>
    </ChakraProvider>
  </Provider>
}
