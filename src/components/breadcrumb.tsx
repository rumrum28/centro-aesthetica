import { Link } from 'react-router-dom'
import PageTitle from './pageTitle'
import FollowUsIcons from './followUsIcons'

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string
  description: string
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container mx-auto dark:border-gray-800 bg-white dark:bg-gray-800 max-w-6xl">
          <div className="flex flex-wrap flex-col sm:flex-row p-5">
            <div className="w-full mb-4">
              <ul className="flex items-center justify-start">
                <li className="flex items-center">
                  <Link
                    to="/"
                    className="pr-1 text-base font-medium text-body-color hover:text-primary"
                  >
                    Home
                  </Link>
                  <span className="mr-3 block h-2 w-2 rotate-45 border-t-2 border-r-2 border-body-color"></span>
                </li>
                <li className="text-base font-semibold text-primary text-justify">
                  {pageName}
                </li>
              </ul>
            </div>

            <div className="flex w-full mb-4 items-center justify-center">
              <PageTitle title={pageName} additionalClass="w-full text-left" />
              <div className="flex my-2 px-0 md:px-2 justify-start items-center">
                <FollowUsIcons />
              </div>
            </div>

            <p className="text-gray-500 sm:px-0 text-lg indent-7 leading-snug">
              {description}
            </p>
          </div>
        </div>

        <div>
          <span className="absolute top-0 left-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
    </>
  )
}

export default Breadcrumb
