import Image from 'next/image';

const Banner = ({ bgPicture }) => {
  return (
    <div className="flex items-center justify-center sm:block relative h-[650px] sm:h-[700px] lg:h-[750px] xl:[800px] 2xl:h-[850px] -mt-24">
      {bgPicture.map((picture, idx) => (
        <Image
          key={idx}
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
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
