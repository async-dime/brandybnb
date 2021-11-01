import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

import Image from 'next/image';

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center py-7 px-4 border-b-2 cursor-pointer hover:opacity-80 hover:shadow-lg space-y-5 sm:space-y-0 transition duration-200 ease-out first:border-t">
      {!img ? (
        <div className="relative h-40 w-72 md:h-52 md:w-80 flex-shrink-0 bg-gray-200 rounded-2xl animate-pulse"/>
      ) : (
        <div className="relative h-40 w-72 md:h-52 md:w-80 flex-shrink-0">
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow sm:pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-500" />
            {star}
          </p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">
              {price}/ night
            </p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
