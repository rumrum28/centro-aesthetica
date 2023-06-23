import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-header-pattern dark:bg-header-patterndark text-white pt-12 pb-8 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="container overflow-hidden flex flex-col lg:flex-row justify-between mx-auto px-4 ">
          <Link
            to="/"
            className="flex items-start text-xl font-bold font-serif tracking-tight bg-[#ceb700] dark:bg-logo whitespace-nowrap"
            style={{
              color: 'transparent',
              WebkitBackgroundClip: 'text',
            }}
          >
            {/* CENTRO AESTHETICA */}
            <img
              src="/svg/logo-no-background.svg"
              alt="logo"
              width={200}
              height={200}
              className="w-64"
            />
          </Link>
          <div className="w-3/4 block sm:flex text-sm mt-6 lg:mt-0">
            <ul className="text-gray-700 list-none p-0 flex flex-col text-left w-full">
              <li className="inline-block py-2 px-3 text-black dark:text-white uppercase tracking-wide">
                Product
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
              <li className="inline-block py-2 px-3 text-black dark:text-white uppercase font-medium tracking-wide">
                Company
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
            <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
              <li className="inline-block py-2 px-3 text-black dark:text-white uppercase font-medium tracking-wide">
                Developers
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Developer API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 pl-3 pr-5 text-gray-400 hover:text-[#57480e] dark:hover:text-white no-underline"
                >
                  Guides
                </a>
              </li>
            </ul>
            <div className="text-gray-700 flex flex-col w-full">
              <div className="inline-block py-2 px-3 text-black dark:text-white uppercase font-medium tracking-wide">
                Follow Us
              </div>
              <div className="flex pl-4 justify-start mt-2">
                <a
                  className="flex items-center text-gray-300 hover:text-[#57480e] dark:hover:text-white mr-3 no-underline"
                  href="#"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="flex items-center text-gray-300 hover:text-[#57480e] dark:hover:text-white mr-3 no-underline"
                  href="#"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="flex items-center text-gray-300 hover:text-[#57480e] dark:hover:text-white mr-3 no-underline"
                  href="#"
                >
                  <InstagramIcon />
                </a>
                <a
                  className="flex items-center text-gray-300 hover:text-[#57480e] dark:hover:text-white no-underline"
                  href="#"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-4 "></div>

      <div className="max-w-7xl mx-auto">
        <div className="pt-6 text-gray-600 flex flex-col md:flex-row justify-center items-center">
          <div>© 2023 Centro Aesthetica</div>
          <div>&nbsp;All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
