import { Link } from 'react-router-dom'
import ThemeButtonOnly from './themeButtonOnly'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import LinksButton from './linksButton'
import DrawerComponent from './drawer'

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
            <div className="max-w-7xl mx-auto px-2">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0 cursor-pointer">
                  <Link to="/" className="flex items-center">
                    <span className="text-2xl font-bold text-pink-300">
                      Centro
                    </span>
                    <span className="text-2xl font-bold text-pink-400">
                      Aesthetica
                    </span>
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <div className="flex justify-center items-center">
                    <LinksButton />

                    <ThemeButtonOnly />
                  </div>
                </div>

                <div className="block lg:hidden">
                  <DrawerComponent />
                </div>
              </div>
            </div>
          </nav>
        </AppBar>
      </HideOnScroll>
    </>
  )
}
