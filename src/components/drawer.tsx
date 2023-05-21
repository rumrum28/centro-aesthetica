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

import HomeIcon from '@mui/icons-material/Home'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'

import EngineeringIcon from '@mui/icons-material/Engineering'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'

import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined'

import InfoIcon from '@mui/icons-material/Info'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined'

import GavelIcon from '@mui/icons-material/Gavel'

import PrivacyTipIcon from '@mui/icons-material/PrivacyTip'
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined'

const DrawerComponent = () => {
  const [state, setState] = useState<boolean>(false)
  const [dark, isDark] = useState<boolean>(false)

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

  const list1 = [
    { name: 'Home', logo: dark ? <HomeOutlinedIcon /> : <HomeIcon /> },
    {
      name: 'Book Appointment',
      logo: dark ? <BookmarkAddOutlinedIcon /> : <BookmarkAddIcon />,
    },
    {
      name: 'Our Location',
      logo: dark ? <LocationOnOutlinedIcon /> : <LocationOnIcon />,
    },
    {
      name: 'Our Services',
      logo: dark ? <EngineeringOutlinedIcon /> : <EngineeringIcon />,
    },
    {
      name: 'Contact Us',
      logo: dark ? <ContactPhoneOutlinedIcon /> : <ContactPhoneIcon />,
    },
  ]
  const list2 = [
    {
      name: 'About Us',
      logo: dark ? <InfoOutlinedIcon /> : <InfoIcon />,
    },
    {
      name: 'FAQ',
      logo: dark ? <LiveHelpOutlinedIcon /> : <LiveHelpIcon />,
    },
    {
      name: 'Terms & Conditions',
      logo: <GavelIcon />,
    },
    {
      name: 'Privacy Policy',
      logo: dark ? <PrivacyTipOutlinedIcon /> : <PrivacyTipIcon />,
    },
  ]

  const list = () => (
    <Box
      sx={{ width: 'auto', minWidth: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ThemeButton />
          </ListItemButton>
        </ListItem>

        {list1.map((data, index) => (
          <ListItem key={data.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{data.logo}</ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {list2.map((data, index) => (
          <ListItem key={data.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{data.logo}</ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className="text-gray-800 dark:text-white" />
      </Button>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  )
}

export default DrawerComponent
