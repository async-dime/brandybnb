import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid';

import Link from 'next/link';

import { useAuth } from '@/lib/auth';

const UserDropdown = () => {
  const { user, signOut } = useAuth();

  return (
    <>
      {user ? (
        <>
          <Menu as="div" className="relative inline-flex">
            <Menu.Button className="flex items-center justify-center text-sm font-medium bg-white focus:outline-none space-x-2 p-2 border-2 hover:shadow-lg button-custom">
              <MenuIcon className="h-6" />
              <img
                src={user?.photoUrl}
                alt="Picture of the user"
                class="mx-auto object-fill rounded-full h-6 w-6 "
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-12 origin-top-left bg-white rounded-md shadow-lg focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => signOut()}
                        className={`${
                          active
                            ? 'bg-violet-500 text-red-400'
                            : 'text-gray-900'
                        } group flex rounded-md items-center px-1 py-2 text-sm`}
                      >
                        {active ? (
                          <SignOutActiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        ) : (
                          <SignOutInactiveIcon
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )}
                        Sign Out
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      ) : (
        <Menu>
          <Menu.Button className="inline-flex justify-center p-1 text-sm font-medium">
            <Link href="/dashboard">
              <a>
                <UserCircleIcon aria-hidden="true" className="h-6" />
              </a>
            </Link>
          </Menu.Button>
        </Menu>
      )}
    </>
  );
};

const SignOutInactiveIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
    <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
    <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
  </svg>
);

const SignOutActiveIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 4H16V10" stroke="rgba(248, 113, 113, 1)" strokeWidth="3" />
    <path d="M16 4L8 12" stroke="rgba(248, 113, 113, 1)" strokeWidth="3" />
    <path d="M8 6H4V16H14V12" stroke="rgba(248, 113, 113, 1)" strokeWidth="3" />
  </svg>
);

export default UserDropdown;