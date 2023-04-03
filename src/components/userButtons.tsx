import { Box, Divider, IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserButtons = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: (t) => `1px solid ${t.palette.divider}`,
          borderRadius: 1,
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <Link
          to="/login"
          className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm hover:font-medium dark:text-white"
        >
          Login
        </Link>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className="dark:bg-white"
        />

        <Link
          to="/register"
          className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm hover:font-medium dark:text-white"
        >
          Register
        </Link>
      </Box>
    </div>
  )
}

export default UserButtons
