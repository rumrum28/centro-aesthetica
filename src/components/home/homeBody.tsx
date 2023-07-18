import SectionTitle from './SectionTitle'

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const HomeBody = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  )

  return (
    <section className="py-5 max-w-6xl mx-auto w-full">
      <div className="border-b border-body-color/[.15] pb-5 dark:border-white/[.15] md:pb-20 lg:pb-28">
        <div className="flex flex-wrap items-center">
          <div className="w-full mx-auto px-4 md:w-4/5 lg:w-1/2">
            <SectionTitle
              title="Flawless Skin"
              paragraph="Try our hydra facial treatment. It is a non-invasive, multi-step treatment that combines the benefits of next-level hydradermabrasion, a chemical peel, automated painless extractions (no pinching!) and a special delivery of Antioxidants, Hyaluronic Acid and Peptides. It does all of this in one quick treatment that delivers real results without downtime or irritation."
              mb="44px"
            />

            <div
              className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
              data-wow-delay=".15s"
            >
              <div className="mx-[-12px] flex flex-wrap">
                <div className="px-3 w-1/2 ">
                  <List text="Glow" />
                  <List text="Repair" />
                  <List text="Protect" />
                </div>

                <div className="px-3 w-1/2 ">
                  <List text="Whiten" />
                  <List text="Anti-Aging" />
                  <List text="Hydra Facial" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
              data-wow-delay=".2s"
            >
              <img
                src="/images/body-1.jpg"
                alt="about-image"
                className="mx-auto w-full md:w-auto max-w-full lg:mr-0 h-auto md:h-[576px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBody
