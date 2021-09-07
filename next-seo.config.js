const title =
  'Brandybnb: Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Brandybnb.';
const description = "brandybnb is built by Gilang Adam. It's a clone of Airbnb";

const SEO = {
  title,
  description,
  canonical: 'https://brandybnb.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://brandybnb.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://brandybnb.vercel.app/og.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
