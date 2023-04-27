import { Box, Drawer } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../pages/login'

const LoginModal = () => {
  const [state, setState] = useState<boolean>(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth, setWindowWidth])

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState(open)
    }

  const list = () => (
    <Box
      sx={{ width: 'auto', minWidth: 360 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <Login display="modal-login" />
    </Box>
  )

  const handleRedirect = () => navigate('/login')

  return (
    <>
      {windowWidth > 767 ? (
        <div
          onClick={toggleDrawer(true)}
          className="cursor-pointer text-gray-800 md:text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium dark:lg:text-gray-400 dark:md:hover:text-white "
        >
          Login
        </div>
      ) : (
        <div
          onClick={handleRedirect}
          className="cursor-pointer text-gray-800 md:text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium dark:lg:text-gray-400 dark:md:hover:text-white "
        >
          Login
        </div>
      )}
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  )
}

export default LoginModal
