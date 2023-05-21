import { Link } from 'react-router-dom'
import ThemeButtonOnly from './themeButtonOnly'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'

function HideOnScroll({ children }: any) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function NavSignIn() {
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar>
          <nav className="bg-white dark:bg-slate-800 duration-100">
            <div className="max-w-6xl mx-auto px-2">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                  <div className="flex items-center">
                    <div className="text-2xl font-bold text-pink-300">
                      Centro
                    </div>
                    <div className="text-2xl font-bold text-pink-400">
                      Aesthetica
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex space-x-4 justify-center items-center">
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

                    <ThemeButtonOnly />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </AppBar>
      </HideOnScroll>
    </>
  )
}
