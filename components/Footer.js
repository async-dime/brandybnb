import { useCallback } from 'react';
import { GlobeAltIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();
  const handleClickGithub = useCallback(
    () => window.open('https://github.com/async-dime/', '_blank'),
    []
  );
  const handleClickGitlab = useCallback(
    () => window.open('https://gitlab.com/gilangadam', '_blank'),
    []
  );

  return (
    <footer className="bg-gray-50 pt-12 z-50">
      <div className="container mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-4 mb-5 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p className="link-hover">How Brandybnb works</p>
          <p className="link-hover">Newsroom</p>
          <p className="link-hover">Brandybnb 2021</p>
          <p className="link-hover">Investors</p>
          <p className="link-hover">Brandybnb Plus</p>
          <p className="link-hover">Brandybnb Luxe</p>
        </div>

        <div className="space-y-4 mb-5 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p className="link-hover">Diversity & Belonging</p>
          <p className="link-hover">Accessibility</p>
          <p className="link-hover">Brandybnb Associates</p>
          <p className="link-hover">Frontline Stays</p>
          <p className="link-hover">Guest Referrals</p>
          <p className="link-hover">Brandybnb.org</p>
        </div>

        <div className="space-y-4 mb-5 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p className="link-hover">Host your home</p>
          <p className="link-hover">Host an Online Experience</p>
          <p className="link-hover">Host an Experience</p>
          <p className="link-hover">Responsible hosting</p>
          <p className="link-hover">Resource Centre</p>
          <p className="link-hover">Community Centre</p>
        </div>

        <div className="space-y-4 mb-5 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p className="link-hover">Our COVID-19 Response</p>
          <p className="link-hover">Help Centre</p>
          <p className="link-hover">Cancellation options</p>
          <p className="link-hover">Neighborhood Support</p>
          <p className="link-hover">Trust & Safety</p>
        </div>
      </div>

      <div className="container mx-auto mt-6 border-t text-gray-600 border-gray-300 py-6 flex flex-col space-y-4 px-5 sm:px-0 sm:space-y-0 sm:flex-row justify-between">
        <div className="flex items-center space-x-3">
          <p>{`Copyright © ${year}`}</p>
          <Link href="https://www.linkedin.com/in/gilang-adam/">
            <button className="hover:underline">Gilang Adam</button>
          </Link>
        </div>

        <div className="flex items-end justify-between space-x-8">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 button-footer">
              <GlobeAltIcon className="-mb-0.5 h-5" />
              <span className="underline">English (US)</span>
            </span>
            <div className="flex items-center space-x-1 button-footer">
              <span>$</span>
              <span className="underline">USD</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={handleClickGithub} className="button-footer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </button>
            <button onClick={handleClickGitlab} className="h-6 w-6 button-footer">
              <svg
                className="bg-cover"
                viewBox="0 0 512 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M120.548 48.424c-2.785-7.996-14.104-7.996-16.979 0L52.813 205.457h118.583c-.09 0-50.848-157.033-50.848-157.033zM26.849 284.512c-2.336 7.188.271 15.183 6.379 19.765l222.703 165.296L52.722 205.457l-25.873 79.055zm144.457-79.055l84.715 264.115 84.715-264.115h-169.43zm313.883 79.055l-25.872-79.055-203.296 264.115 222.703-165.296c6.196-4.582 8.712-12.577 6.465-19.764zM408.471 48.424c-2.785-7.996-14.104-7.996-16.979 0l-50.848 157.033h118.584L408.471 48.424z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
