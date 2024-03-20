const HomeBody2 = () => {
  return (
    <section className="py-5 max-w-6xl mx-auto">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2 mx-auto">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <img
                src="/centro-aesthetica/images/login-banner.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp max-w-[470px] mx-auto"
              data-wow-delay=".2s"
            >
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-darkgold sm:text-2xl lg:text-xl xl:text-2xl">
                  Hydra Facial
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  deep exfoliation that clean your pores, help improve overall
                  skin texture, tone and apperance.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-base font-bold text-black dark:text-darkgold sm:text-2xl lg:text-xl xl:text-2xl">
                  Complete Facial with Diamond Peel
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  mechanical exfoliation that removes excess oil, dirt and dead
                  cells on the surface of the skin to reveal younger brighter
                  skin.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-base font-bold text-black dark:text-darkgold sm:text-2xl lg:text-xl xl:text-2xl">
                  Regular Facial
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  facial massage, cleansing, pricking w/ betadine treatment,
                  toner, whitening mask, moisturizing cream / sunblock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBody2
