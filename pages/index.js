import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LargeCard from '@/components/LargeCard';
import SmallCard from '@/components/SmallCard';
import MediumCard from '@/components/MediumCard';

export default function Home({ exploreData, liveAnywhereData }) {
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 my-2 sm:px-16">
        <section className="pt-10">
          <h2 className="text-4xl font-semibold pb-4">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-4xl font-semibold pb-4">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywhereData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://bit.ly/3gZ3GAe"
          title="The Greatest Outdoors"
          description="Wishlists curated by BrandyBnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://bit.ly/brandybnbexplore').then(
    (res) => res.json()
  );

  const liveAnywhereData = await fetch('https://bit.ly/brandybnblive').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      liveAnywhereData
    }
  };
}
