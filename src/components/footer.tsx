import { Link } from 'react-router-dom'
import FollowUsIcons from './followUsIcons'

const Footer = () => {
  return (
    <footer className="bg-header-pattern dark:bg-header-patterndark text-white pt-12 pb-8 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto px-4 ">
          <Link
            to="/"
            className="flex items-start text-xl font-bold font-serif tracking-tight bg-[#ceb700] dark:bg-logo whitespace-nowrap"
            style={{
              color: 'transparent',
              WebkitBackgroundClip: 'text',
            }}
          >
            <img
              src="/svg/logo-no-background.svg"
              alt="logo"
              width={200}
              height={200}
              className="w-64"
            />
          </Link>
          <div className="w-3/4 block sm:flex text-sm mt-6 lg:mt-0">
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
              <li className="inline-block py-2 px-3 text-black dark:text-white uppercase font-medium tracking-wide">
                Company
              </li>
              <li>
                <Link
                  to="/about"
                  className="inline-block py-2 pl-3 pr-5 text-gray-600 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="inline-block py-2 pl-3 pr-5 text-gray-600 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="inline-block py-2 pl-3 pr-5 text-gray-600 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <ul className="text-gray-700 list-none p-0 flex flex-col text-left w-full">
              <li className="inline-block py-2 px-3 text-black dark:text-white uppercase tracking-wide">
                Product
              </li>
              <li>
                <Link
                  to="/faq"
                  className="inline-block py-2 pl-3 pr-5 text-gray-600 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  FAQ
                </Link>
              </li>
            </ul>

            {/* follow us icons  */}
            <div className="text-gray-700 flex flex-col w-full">
              <div className="inline-block py-2 px-3 text-black dark:text-white uppercase font-medium tracking-wide">
                Follow Us
              </div>
              <div className="flex pl-4 justify-start mt-2">
                <FollowUsIcons />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-4 "></div>

      <div className="max-w-6xl mx-auto">
        <div className="pt-6 text-gray-600 flex flex-col md:flex-row justify-center items-center">
          <div>&copy; 2023 Centro Aesthetica</div>
          <div>&nbsp;-&nbsp;All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
