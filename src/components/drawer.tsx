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
  Badge,
} from '@mui/material'
import { useState } from 'react'
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
import { useNavigate } from 'react-router-dom'

const DrawerComponent = () => {
  const [state, setState] = useState<boolean>(false)
  const [dark, isDark] = useState<boolean>(false)
  const navigate = useNavigate()

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
    {
      name: 'Home',
      logo: dark ? <HomeOutlinedIcon /> : <HomeIcon />,
      link: '/',
    },
    {
      name: 'Book Appointment',
      logo: dark ? (
        <Badge color="error" overlap="circular" badgeContent={1}>
          <BookmarkAddOutlinedIcon />
        </Badge>
      ) : (
        <Badge color="error" overlap="circular" badgeContent={1}>
          <BookmarkAddIcon />
        </Badge>
      ),
      link: '/book-services',
    },
    {
      name: 'Our Location',
      logo: dark ? <LocationOnOutlinedIcon /> : <LocationOnIcon />,
      link: '/our-locations',
    },
    {
      name: 'Our Services',
      logo: dark ? <EngineeringOutlinedIcon /> : <EngineeringIcon />,
      link: '/services',
    },
    {
      name: 'Contact Us',
      logo: dark ? <ContactPhoneOutlinedIcon /> : <ContactPhoneIcon />,
      link: '/contact',
    },
  ]
  const list2 = [
    {
      name: 'About Us',
      logo: dark ? <InfoOutlinedIcon /> : <InfoIcon />,
      link: '/about',
    },
    {
      name: 'FAQ',
      logo: dark ? <LiveHelpOutlinedIcon /> : <LiveHelpIcon />,
      link: '/faq',
    },
    {
      name: 'Terms & Conditions',
      logo: <GavelIcon />,
      link: '/terms-and-conditions',
    },
    {
      name: 'Privacy Policy',
      logo: dark ? <PrivacyTipOutlinedIcon /> : <PrivacyTipIcon />,
      link: '/privacy-policy',
    },
  ]

  const list = () => (
    <Box
      sx={{ width: 'auto', minWidth: 280 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      className=" bg-white dark:text-[#efd773] dark:bg-gray-800 h-full"
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ThemeButton />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ mb: 2 }} />

        {list1.map((data, index) => (
          <ListItem
            key={data.name}
            disablePadding
            className="hover:bg-orange-100 dark:hover:bg-slate-500"
          >
            <ListItemButton onClick={() => navigate(data.link)}>
              <ListItemIcon className="dark:text-[#efd773]">
                {data.logo}
              </ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {list2.map((data, index) => (
          <ListItem
            key={data.name}
            disablePadding
            className="hover:bg-orange-100 dark:hover:bg-slate-500"
          >
            <ListItemButton onClick={() => navigate(data.link)}>
              <ListItemIcon className="dark:text-[#efd773]">
                {data.logo}
              </ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Badge color="error" overlap="circular" badgeContent={1}>
        <Button onClick={toggleDrawer(true)} sx={{ minWidth: '36px' }}>
          <MenuIcon className="text-gray-800 dark:text-white" />
        </Button>
      </Badge>

      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  )
}

export default DrawerComponent
