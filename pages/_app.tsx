import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useStore } from '../state/redux';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
