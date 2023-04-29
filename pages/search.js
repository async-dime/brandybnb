import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router';
import { NextSeo } from 'next-seo';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InfoCard from '@/components/InfoCard';
import Map from '@/components/Map';
import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/outline';

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const title = `Brandybnb - Search in ${location}`;
  const url = `https://brandybnb.vercel.app/search`;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const starRating = (rating) => {
    let star = Math.floor(rating);
    const output = [];

    for (let i = 0; i < 5; i++) {
      const uid = Math.floor(Math.random() * 100000);
      if (star <= 0) {
        star -= 1;
        output.push(
          <StarIconOutline key={uid} className="h-4 text-gray-600" />
        );
      } else {
        star -= 1;
        output.push(<StarIcon key={uid} className="h-5 text-red-400" />);
      }
    }
    return output;
  };

  return (
    <div>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Header
        placeholder={`${location} - ${range} - ${noOfGuests} ${
          noOfGuests === 1 ? 'guest' : 'guests'
        }`}
      />

      <main className="flex">
        <section className="flex-grow overflow-scroll scrollbar-hide">
          <div className="pt-14 px-6">
            <p className="text-xs">
              300+ Stays | {range} | for {noOfGuests}{' '}
              {noOfGuests === 1 ? 'guest' : 'guests'}
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
              Stays in {location}
            </h1>
            <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
              <p className="button">Cancellation Flexibility</p>
              <p className="button">Type of Place</p>
              <p className="button">Price</p>
              <p className="button">Rooms and Beds</p>
              <p className="button">More filters</p>
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 px-6 my-5 space-y-5">
            {searchResults.map((item, _id) => (
              <InfoCard key={_id} id={_id} {...item} />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px] h-screen sticky top-20">
          <Map rating={starRating} searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://api.npoint.io/ed23299d0c93ffa722c3').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults
    }
  };
}
