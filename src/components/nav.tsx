import { Link } from 'react-router-dom'
import DrawerComponent from './drawer'
import ThemeButton from './themeButton'
import AppBar from '@mui/material/AppBar'
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
      <HideOnScroll>
        <AppBar>
          {/* sx={{ boxShadow: 1 }} */}

          <nav className="bg-header-pattern dark:bg-header-patterndark duration-100 ">
            <div className="max-w-6xl mx-auto px-2">
              <div className="flex items-center justify-between h-24">
                <div className="flex-shrink-0 cursor-pointer">
                  <Link
                    to="/"
                    className="flex items-center text-2xl font-bold font-serif tracking-tight"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right,#cb9b51 0, #f6e27a 45%,#f6f2c0 50%,#f6e27a 55%,#cb9b51 100%)',
                      color: 'transparent',
                      WebkitBackgroundClip: 'text',
                    }}
                  >
                    CentroAesthetica
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <LinksButton />

                    <ThemeButton />
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
