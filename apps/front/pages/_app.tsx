import './styles.css';
import { Layout } from '@next-template-nx/ui';

export function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
