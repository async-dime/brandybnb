import Router from 'next/router';
import dynamic from 'next/dynamic';

import { AuthProvider } from '@/lib/auth';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

import ProgressBar from '@/components/ProgressBar';

import 'tailwindcss/tailwind.css';
import '@/styles/global.css';
import '@/styles/mapbox-gl.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const CrispWithNoSSR = dynamic(() => import('@/components/Crisp'), {
  ssr: false
});

Router.events.on('routeChangeStart', ProgressBar.start);
Router.events.on('routeChangeComplete', ProgressBar.finish);
Router.events.on('routeChangeError', ProgressBar.finish);

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <DefaultSeo {...SEO} />
      <CrispWithNoSSR />
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
