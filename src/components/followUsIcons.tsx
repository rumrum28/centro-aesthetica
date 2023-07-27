import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

const FollowUsIcons = () => {
  return (
    <>
      <a
        className="flex items-center text-gray-500 hover:text-[#57480e] dark:hover:text-white mr-3 no-underline"
        href="#"
      >
        <FacebookIcon />
      </a>
      <a
        className="flex items-center text-gray-500 hover:text-[#57480e] dark:hover:text-white mr-3 no-underline"
        href="#"
      >
        <TwitterIcon />
      </a>
      <a
        className="flex items-center text-gray-500 hover:text-[#57480e] dark:hover:text-white mr-3 no-underline"
        href="#"
      >
        <InstagramIcon />
      </a>
    </>
  )
}

export default FollowUsIcons
