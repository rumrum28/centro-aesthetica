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
        to="/centro-aesthetica/"
        className="text-gray-800 hover:bg-gray-100 hover:text-[#887631] dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Home
      </Link>
      <Badge
        color="error"
        overlap="rectangular"
        badgeContent={bookings && bookings.length}
      >
        <Link
          to="/centro-aesthetica/book-services"
          className="text-gray-800 hover:bg-gray-100 hover:text-[#887631] dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
        >
          Book Services
        </Link>
      </Badge>

      <Link
        to="/centro-aesthetica/our-locations"
        className="text-gray-800 hover:bg-gray-100 hover:text-[#887631] dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Our Locations
      </Link>
      <Link
        to="/centro-aesthetica/contact"
        className="text-gray-800 hover:bg-gray-100 hover:text-[#887631] dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Contact Us
      </Link>
    </>
  )
}
