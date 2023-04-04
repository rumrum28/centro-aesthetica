import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useState } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import ThemeButton from './themeButton'
import Login from './login'

const LoginModal = () => {
  const [state, setState] = useState<boolean>(false)

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

  return (
    <>
      <div
        onClick={toggleDrawer(true)}
        className="cursor-pointer text-gray-800 md:text-gray-400 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium dark:lg:text-gray-400 dark:md:hover:text-white "
      >
        Login
      </div>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  )
}

export default LoginModal
