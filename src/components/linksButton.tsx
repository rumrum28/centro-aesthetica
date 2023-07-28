import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge'
import useZustand from '../utils/zustand'

export default function LinksButton() {
  const { addBooking, bookings } = useZustand((state) => ({
    addBooking: state.addBooking,
    bookings: state.bookings,
  }))

  return (
    <>
      <Link
        to="/"
        className="text-gray-800 hover:bg-gray-100 hover:text-[#887631] dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Home
      </Link>
      <Badge
        color="error"
        overlap="rectangular"
        badgeContent={(bookings as []).length}
      >
        <Link
          to="/book-services"
          className="text-gray-800 hover:bg-gray-100 hover:text-[#887631] dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
        >
          Book Services
        </Link>
      </Badge>

      <Link
        to="/our-locations"
        className="text-gray-800 hover:bg-gray-100 hover:text-[#887631] dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Our Locations
      </Link>
      <Link
        to="/contact"
        className="text-gray-800 hover:bg-gray-100 hover:text-[#887631] dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Contact Us
      </Link>
    </>
  )
}
