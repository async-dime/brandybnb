import { NextSeo } from 'next-seo';

const Page = ({ name, path, children }) => {
  const title = `Brandybnb - ${name}`;
  const url = `https://brandybnb.vercel.app/${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      {children}
    </>
  );
};

export default Page;
