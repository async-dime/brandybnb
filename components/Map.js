import Image from 'next/image';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import { useState } from 'react';

const Map = ({ searchResults, rating }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10
  });

  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={`${result.long}${result.lat}`}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(result)}
              onKeyPress={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl hover:animate-bounces"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnclick={false}
              closeButton={true}
              latitude={result.lat}
              longitude={result.long}
              className="z-40"
            >
              <div>
                <div className="relative w-full h-44">
                  <Image
                    src={result.img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    alt={result.title}
                  />
                  <h3 className="absolute bottom-0 right-0 font-semibold text-white text-sm px-3 py-1 bg-gray-700">
                    {result.price}
                  </h3>
                </div>

                <div className="border-b py-2 w-10 border-gray-400 mx-auto" />

                <div className="px-3 pb-3">
                  <h2 className="font-semibold pt-2">{result.title}</h2>
                  <p className="text-sm font-light">{result.location}</p>
                  <div className="flex items-center pt-4">
                    <p className="w-3">{Math.floor(result.star)}</p>
                    {rating(parseInt(result.star, 10))}
                    <div className="relative ml-auto hover:opacity-90">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 cursor-pointer"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          ) : null}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
