import { Link } from 'react-router-dom'
import DrawerComponent from './drawer'
import ThemeButton from './themeButton'

export default function NavSignIn() {
  return (
    <nav className="bg-white dark:bg-slate-800 duration-100">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-pink-300">Centro</div>
              <div className="text-2xl font-bold text-pink-400">Aesthetica</div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
              >
                Contact
              </Link>

              {/* <UserButtons /> */}

              <ThemeButton />
            </div>
          </div>

          {/* <div className="block md:hidden">
            <DrawerComponent />
          </div> */}
        </div>
      </div>
    </nav>
  )
}
