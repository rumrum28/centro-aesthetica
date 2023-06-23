import { Link } from 'react-router-dom'
import DrawerComponent from './drawer'
import ThemeButton from './themeButton'
import { AppBar } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import LinksButton from './linksButton'

function HideOnScroll({ children }: any) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Nav() {
  return (
    <>
      <CssBaseline />
      {/* <HideOnScroll> */}
      <AppBar>
        <nav className="bg-header-pattern dark:bg-header-patterndark duration-100 ">
          <div className="max-w-7xl mx-auto px-2">
            <div className="flex items-center justify-between h-24 pl-2">
              <div className="flex-shrink-0 cursor-pointer">
                <Link
                  to="/"
                  className="flex items-center text-xl font-bold font-serif tracking-tight bg-[#ceb700] dark:bg-logo whitespace-nowrap"
                  style={{
                    color: 'transparent',
                    WebkitBackgroundClip: 'text',
                  }}
                >
                  CENTRO AESTHETICA
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  <LinksButton />

                  <ThemeButton />
                </div>
              </div>

              <div className="block lg:hidden bg-transparent">
                <DrawerComponent />
              </div>
            </div>
          </div>
        </nav>
      </AppBar>
      {/* </HideOnScroll> */}
    </>
  )
}
