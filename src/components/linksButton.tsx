import { Link } from 'react-router-dom'

export default function LinksButton() {
  return (
    <>
      <Link
        to="/"
        className="text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Home
      </Link>
      <Link
        to="/book"
        className="text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Book
      </Link>
      <Link
        to="/locations"
        className="text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Our Locations
      </Link>
      <Link
        to="/services"
        className="text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Services
      </Link>

      <Link
        to="/contact"
        className="text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 darkhover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-white"
      >
        Contact Us
      </Link>
    </>
  )
}
