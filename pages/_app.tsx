import {AppProps} from 'next/app';
import '@share/globals.css';

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
