import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';

import 'tailwindcss/tailwind.css';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import '@/styles/global.css';
import '@/styles/mapbox-gl.css';

import SEO from 'next-seo.config';
import { DefaultSeo } from 'next-seo';


const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />;
    </>
  );
};

export default App;
