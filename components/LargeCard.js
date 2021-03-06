import Image from 'next/image';

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-10 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt={`${title} large card`}
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>

        <button className="text-sm px-4 py-2 rounded-lg mt-5 text-white bg-gray-900 hover:bg-red-400 transition duration-300 ease-in-out button-clicked">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
