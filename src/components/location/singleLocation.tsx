import { Link } from 'react-router-dom'
import { Location } from '../../types/locations'

const SingleLocations = ({ blog }: { blog: Location }) => {
  const { title, image, paragraph, tags } = blog
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark mb-4"
        data-wow-delay=".1s"
      >
        <Link to="/" className="relative block h-[220px] w-full">
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <img src={image} alt="image" />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3 className="min-h-auto md:min-h-[56px] mb-4">
            <Link
              to="/"
              className="block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary "
            >
              {title}
            </Link>
          </h3>
          <p className="border-b border-body-color border-opacity-10 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  )
}

export default SingleLocations
