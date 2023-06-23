import { useState } from 'react'

type BackgroundVideoProps = {
  videoSources: { src: string }[]
  placeholderImage: string
}

const BackgroundVideo = ({
  videoSources,
  placeholderImage,
}: BackgroundVideoProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleOnLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className="absolute right-0 top-0 left-0 w-full h-auto z-0">
      {!isLoaded && (
        <img
          src={placeholderImage}
          alt="placeholder"
          className="object-cover w-full h-full"
        />
      )}
      <video
        onLoadedData={handleOnLoad}
        autoPlay={true}
        loop={true}
        muted
        className={`object-cover w-full h-full ${
          isLoaded
            ? 'opacity-100 transition-opacity duration-1000'
            : 'opacity-0'
        }`}
      >
        {videoSources.map((videoSource, index) => (
          <source key={index} src={videoSource.src} type="video/mp4" />
        ))}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default BackgroundVideo
