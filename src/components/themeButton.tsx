import { Box, Divider, IconButton } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginModal from './loginModal'
import useZustand from '../utils/zustand'
import User from './navbar/user'

const ThemeButton = () => {
  const { user } = useZustand((state) => ({
    user: state.user,
  }))

  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )
  const element = document.documentElement

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break
      default:
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break
    }
  }, [theme])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          border: (t) =>
            `1px solid ${theme === 'light' ? t.palette.divider : 'white'}`,
          borderRadius: 1,
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
        className="md:hover:bg-slate-100 dark:md:hover:bg-gray-700 mx-auto"
      >
        {user?.name ? (
          <User name={user?.name} />
        ) : (
          <>
            <LoginModal />

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="dark:bg-white"
            />

            <Link
              to="/register"
              className="text-gray-800 md:text-gray-400 hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium dark:lg:text-gray-400 dark:md:hover:text-white"
            >
              Register
            </Link>
          </>
        )}

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className="dark:bg-white"
        />

        {theme === 'light' ? (
          <IconButton
            aria-label="dark-mode"
            onClick={() => setTheme('dark')}
            className={`w-9 h-9  ${
              theme === 'light' ? 'bg-pink-300' : 'bg-gray-300'
            }`}
            size="large"
          >
            <DarkModeIcon />
          </IconButton>
        ) : (
          <IconButton
            aria-label="light-mode"
            onClick={() => setTheme('light')}
            className={`w-9 h-9  ${
              theme === 'light' ? 'bg-pink-300' : 'bg-gray-300'
            }`}
            size="large"
          >
            <LightModeIcon className="text-gray-400 md:hover:text-gray-100" />
          </IconButton>
        )}
      </Box>
    </>
  )
}

export default ThemeButton
