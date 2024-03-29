import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LargeCard from '@/components/LargeCard';
import MediumCard from '@/components/MediumCard';
import SmallCard from '@/components/SmallCard';

import { getCloudinaryPic } from './api/cloudinaryPic';
import { v4 as uuidv4 } from 'uuid';

export default function Home({ exploreData, liveAnywhereData, cloudinaryPic }) {
  return (
    <div>
      <Header page="Index" />
      <Banner bgPicture={cloudinaryPic} />
      <main className="max-w-7xl mx-auto px-8 my-2 sm:px-16">
        <section className="pt-10">
          <h2 className="text-4xl font-semibold pb-4">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((data) => (
              <SmallCard key={uuidv4()} {...data} />
            ))}
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-4xl font-semibold pb-4">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywhereData?.map((data) => (
              <MediumCard key={uuidv4()} {...data} />
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
  const exploreData = await fetch(
    'https://api.npoint.io/8e066d70f0eae14785d9'
  ).then((res) => res.json());

  const liveAnywhereData = await fetch(
    'https://api.npoint.io/a4243de8dd81e6b2f7d6'
  ).then((res) => res.json());

  const cloudinaryPic = await getCloudinaryPic('background-image-large');

  return {
    props: {
      exploreData,
      liveAnywhereData,
      cloudinaryPic
    }
  };
}
