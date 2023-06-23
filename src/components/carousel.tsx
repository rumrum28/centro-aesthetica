import { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const Carousel = ({ images }: any) => {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(images) || images.length <= 0) {
    return null
  }

  return (
    <section className="relative flex items-center justify-center h-screen">
      <KeyboardArrowLeftIcon
        className="absolute left-0 text-6xl text-black cursor-pointer"
        onClick={prevSlide}
      />
      <KeyboardArrowRightIcon
        className="absolute right-0 text-6xl text-black cursor-pointer"
        onClick={nextSlide}
      />
      {images.map((image, index) => {
        return (
          <div
            className={
              index === current
                ? 'opacity-100 duration-1000 transition-opacity'
                : 'opacity-0 duration-1000 transition-opacity'
            }
            key={index}
          >
            {index === current && (
              <img
                src={image.image}
                alt="carousel"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Carousel
