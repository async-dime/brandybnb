import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { getCloudinaryPic } from './api/cloudinaryPic';
import { useRouter } from 'next/dist/client/router';

import Image from 'next/image';

import LoginButtons from '@/components/LoginButtons';
import Page from '@/components/Page';

const Dashboard = ({ cloudinaryPic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Page name="Dashboard" path="/dashboard">
      <div className="relative min-h-screen grid bg-red-400 ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
          <div className="relative sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white ">
            {cloudinaryPic.map((picture, idx) => (
              <Image
                key={idx}
                className="bg-no-repeat bg-cover z-0"
                src={picture.large}
                alt="Air balloon experiences"
                placeholder="blur"
                blurDataURL={`data:image/jpeg;base64,${picture.small}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            ))}

            <div className="absolute bg-black opacity-25 inset-0 z-10"></div>
            <div className="w-full lg:max-w-2xl md:max-w-md z-20 items-center text-center">
              <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center">
                <a href="/" onClick={() => router.push('/')}>
                  <svg
                    viewBox="0 0 1000.000000 1000.000000"
                    className="cursor-pointer text-white ml-3 w-auto h-16 lg:h-20 inline"
                    fill="currentColor"
                  >
                    <g
                      transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M8670 9144 c-613 -256 -1718 -716 -2455 -1024 -737 -307 -1523 -634
-1747 -727 l-408 -168 0 -720 0 -720 955 -478 955 -477 0 -1675 0 -1675 1915
0 1915 0 0 4065 c0 2236 -3 4065 -7 4064 -5 0 -510 -210 -1123 -465z"
                      />
                      <path
                        d="M2550 7524 c-383 -52 -759 -182 -1073 -371 -522 -315 -925 -792
-1150 -1363 -183 -465 -233 -987 -141 -1490 22 -119 52 -248 60 -259 2 -2 34
25 72 59 l69 62 -18 81 c-33 149 -49 290 -56 467 -29 846 351 1639 1029 2145
342 256 698 409 1133 486 89 16 177 23 340 26 335 8 565 -24 862 -118 l131
-42 66 58 c36 31 66 61 66 64 0 11 -194 80 -329 117 -153 42 -302 70 -440 84
-145 14 -495 11 -621 -6z"
                      />
                      <path
                        d="M3005 5355 c-434 -233 -1236 -661 -1782 -952 l-992 -528 -1 -1197 0
-1198 1795 0 1795 0 0 2150 c0 1714 -3 2150 -12 2149 -7 -1 -368 -192 -803
-424z"
                      />
                      <path
                        d="M4790 4739 c-304 -37 -588 -239 -723 -515 -73 -147 -98 -260 -98
-430 1 -232 83 -447 235 -614 177 -194 403 -303 660 -317 437 -24 842 275 958
707 19 72 22 109 22 240 -1 139 -3 164 -28 245 -35 115 -64 180 -122 266 -199
300 -548 461 -904 418z"
                      />
                      <path
                        d="M293 1018 c9 -105 31 -181 82 -283 80 -163 195 -278 359 -360 l88
-45 4273 0 4273 0 88 44 c108 54 189 119 265 209 103 122 179 314 179 449 l0
58 -4806 0 -4807 0 6 -72z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <a
                  href="/"
                  onClick={() => router.push('/')}
                  className=" cursor-pointer mt-6 font-bold text-gray-100"
                >
                  <svg
                    viewBox="0 0 1000.000000 1000.000000"
                    className="h-10 w-auto inline"
                    fill="currentColor"
                  >
                    <g
                      transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M8670 9144 c-613 -256 -1718 -716 -2455 -1024 -737 -307 -1523 -634
-1747 -727 l-408 -168 0 -720 0 -720 955 -478 955 -477 0 -1675 0 -1675 1915
0 1915 0 0 4065 c0 2236 -3 4065 -7 4064 -5 0 -510 -210 -1123 -465z"
                      />
                      <path
                        d="M2550 7524 c-383 -52 -759 -182 -1073 -371 -522 -315 -925 -792
-1150 -1363 -183 -465 -233 -987 -141 -1490 22 -119 52 -248 60 -259 2 -2 34
25 72 59 l69 62 -18 81 c-33 149 -49 290 -56 467 -29 846 351 1639 1029 2145
342 256 698 409 1133 486 89 16 177 23 340 26 335 8 565 -24 862 -118 l131
-42 66 58 c36 31 66 61 66 64 0 11 -194 80 -329 117 -153 42 -302 70 -440 84
-145 14 -495 11 -621 -6z"
                      />
                      <path
                        d="M3005 5355 c-434 -233 -1236 -661 -1782 -952 l-992 -528 -1 -1197 0
-1198 1795 0 1795 0 0 2150 c0 1714 -3 2150 -12 2149 -7 -1 -368 -192 -803
-424z"
                      />
                      <path
                        d="M4790 4739 c-304 -37 -588 -239 -723 -515 -73 -147 -98 -260 -98
-430 1 -232 83 -447 235 -614 177 -194 403 -303 660 -317 437 -24 842 275 958
707 19 72 22 109 22 240 -1 139 -3 164 -28 245 -35 115 -64 180 -122 266 -199
300 -548 461 -904 418z"
                      />
                      <path
                        d="M293 1018 c9 -105 31 -181 82 -283 80 -163 195 -278 359 -360 l88
-45 4273 0 4273 0 88 44 c108 54 189 119 265 209 103 122 179 314 179 449 l0
58 -4806 0 -4807 0 6 -72z"
                      />
                    </g>
                  </svg>
                </a>
                <h2 className="mt-10 text-4xl font-bold text-gray-100">
                  Find vacation rentals, cabins, beach houses, unique homes and
                  experiences around the world.
                </h2>
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={openModal}
                    className="mt-10 flex justify-center items-center text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-extrabold my-3 hover:shadow-xl button-clicked"
                  >
                    Login or Sign Up
                  </button>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <a
                    href="/"
                    onClick={() => router.push('/')}
                    className="inline-flex items-center text-xs font-thin text-center text-white hover:font-normal"
                  >
                    <span className="ml-2">Back to home page</span>
                  </a>
                </div>
              </div>

              {/* Modal */}
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-50 overflow-y-auto"
                  onClose={closeModal}
                >
                  <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-800"
                        >
                          Continue to Brandybnb
                        </Dialog.Title>
                        <div className=" w-full border-b leading-4 mt-4 mb-6 bg-gray-200 text-center align-middle" />

                        <LoginButtons />

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                            onClick={closeModal}
                          >
                            <svg
                              viewBox="0 0 329.26933 329"
                              className="h-4 w-auto inline button-clicked"
                              fill="currentColor"
                            >
                              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;

export async function getStaticProps() {
  const cloudinaryPic = await getCloudinaryPic('background-image-large');

  return {
    props: { cloudinaryPic }
  };
}
