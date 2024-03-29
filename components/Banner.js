import Image from 'next/image';

import { v4 as uuidv4 } from 'uuid';

const Banner = ({ bgPicture }) => {
  return (
    <div className="flex items-center justify-center sm:block relative h-[650px] sm:h-[700px] lg:h-[750px] xl:[800px] 2xl:h-[850px] -mt-24">
      {bgPicture.map((picture) => (
        <Image
          key={uuidv4()}
          className="bg-no-repeat bg-cover z-0"
          src={picture.large}
          alt="Brandybnb banner"
          placeholder="blur"
          blurDataURL={`data:image/jpeg;base64,${picture.small}`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      ))}

      <div className="absolute bg-black opacity-25 inset-0 z-10"></div>
      <div className="absolute top-1/2 w-full text-center z-20">
        <p className="text-sm sm:text-lg font-medium">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-extrabold my-3 hover:shadow-xl button-clicked">
          I&#39;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
