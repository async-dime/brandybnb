import { useRouter } from 'next/dist/client/router';
import { DateRange, DateRangePicker } from 'react-date-range';
import { useEffect, useState } from 'react';
import {
  GlobeAltIcon,
  SearchIcon,
  UsersIcon,
  CheckIcon as ValidSearchIcon,
  XIcon
} from '@heroicons/react/solid';
import BrandybnbSvg from '@/assets/brandybnb.js';
import UserDropdown from './UserDropdown';

const Header = ({ placeholder, page }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    });

    setSearchInput('');
  };

  const [searchStatus, setSearchStatus] = useState(false);
  const [scroll, setScroll] = useState(false);
  const toggleSearchStatus = () => setSearchStatus(!searchStatus);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const buttonHeaderVar = `${
    page !== 'Index' ? 'button-header' : `${scroll && 'button-header'}`
  }`;

  return (
    <header className="sticky w-screen top-0 z-50">
      <div
        className={
          !searchStatus
            ? `grid grid-cols-2 sm:grid-cols-3 md:px-10 transition duration-300 ease-in-out bg-white shadow-md 
            ${
              !scroll &&
              `${page === 'Index' ? 'bg-transparent shadow-none' : 'bg-white'}`
            } p-5 ${searchInput && '-mb-90'}`
            : `flex transition duration-300 ease-in-out bg-white ${
                searchInput && 'flex-col -mb-90'
              } shadow-md ${
                !scroll &&
                `${page === 'Index' ? 'bg-transparent shadow-none' : 'bg-white'}`
              } p-5`
        }
      >
        {/* Left - Logo */}
        <a
          href="/"
          onClick={() => router.push('/')}
          className={
            !searchStatus
              ? 'flex relative items-center cursor-pointer my-auto'
              : 'hidden'
          }
        >
          <BrandybnbSvg
            alt="Brandybnb logo"
            className={`object-left h-10 fill-current ${
              page === 'Index'
                ? `${!scroll ? 'text-white' : 'text-red-400'}`
                : 'text-red-400'
            }`}
          />
        </a>

        {/* Middle - Search */}
        <div
          className={
            !searchStatus
              ? 'bg-white hidden sm:flex items-center md:border-2 rounded-full py-2 md:shadow-sm'
              : 'bg-white flex items-center border-2 rounded-full py-2 shadow-sm flex-grow'
          }
        >
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow ml-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            type="text"
            placeholder={placeholder || 'Start your search'}
          />
          {searchInput ? (
            <ValidSearchIcon
              onClick={search}
              className="inline-flex mx-2 button-search-header"
            />
          ) : (
            <SearchIcon
              onClick={toggleSearchStatus}
              className={
                !searchStatus
                  ? 'hidden md:inline-flex md:mx-2 button-clicked button-search-header '
                  : 'inline-flex mx-2 button-clicked button-search-header '
              }
            />
          )}
        </div>

        {/* Right - Icons */}
        <div
          className={`flex items-center justify-end space-x-2 ${
            page === 'Index'
              ? `${!scroll ? 'text-white' : 'text-gray-500'}`
              : 'text-gray-500'
          } `}
        >
          {searchStatus ? (
            <XIcon
              onClick={() => setSearchStatus(false)}
              className={`h-7 ml-5 hover:text-red-400 cursor-pointer ${
                searchInput && 'hidden'
              } button-clicked`}
            />
          ) : (
            <>
              <div className={`button-custom p-0 sm:p-3 ${buttonHeaderVar}`}>
                <p className="hidden lg:inline-flex">Become a host</p>
              </div>
              <div className={`button-custom p-3 sm:p-0 ${buttonHeaderVar}`}>
                <SearchIcon
                  onClick={() => setSearchStatus(true)}
                  className="h-6 sm:hidden"
                />
              </div>
              <div className={`button-custom p-0 sm:p-3 ${buttonHeaderVar}`}>
                <GlobeAltIcon className="h-6" />
              </div>
              <UserDropdown page={page} />
            </>
          )}
        </div>

        <div className="absolute md:w-[580px] top-20 md:left-[20%] lg:left-[30%] z-50">
          {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto mt-5 bg-white p-5 rounded-xl">
              <div className="hidden sm:inline-flex">
                <DateRangePicker
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={['#FD5B61']}
                  onChange={handleSelect}
                />
              </div>
              <div className="inline-flex sm:hidden">
                <DateRange
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={['#fd5b61']}
                  onChange={handleSelect}
                />
              </div>

              <div className="flex items-center border-b mb-4">
                <h2 className="text-2xl flex-grow font-semibold">
                  Number of Guests
                </h2>
                <UsersIcon className="h-5" />
                <input
                  type="number"
                  min={1}
                  value={noOfGuests}
                  onChange={(e) => setNoOfGuests(e.target.value)}
                  className="w-12 pl-2 text-lg ml-2 rounded-md text-red-400 outline-none"
                />
              </div>
              <div className="flex">
                <button
                  className="flex-grow text-gray-400 active:text-gray-600 button-clicked hover:font-semibold"
                  onClick={resetInput}
                >
                  Cancel
                </button>
                <button
                  onClick={search}
                  className="flex-grow text-red-400 active:text-red-600 button-clicked hover:font-semibold"
                >
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
