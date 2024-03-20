import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import PerHomeServices from './perHomeServices'
import a1 from '/images/anti-acne-facial.jpg'
import a2 from '/images/anti-aging-facial.jpg'
import a3 from '/images/brightening-facial.jpg'

const HomeServices = () => {
  return (
    <section className="max-w-6xl mx-auto w-full p-5">
      <div className="border-b border-body-color/[.15] pb-6 dark:border-white/[.15] md:pb-20 lg:pb-11">
        <SectionTitle title="Our Services" paragraph="" mb="44px" />

        <div className="flex justify-around items-start gap-2">
          <PerHomeServices
            title="Anti Acne Facial"
            paragraph="An anti-acne facial is a specialized skincare treatment designed to combat and reduce acne breakouts."
            image={a1}
          />
          <PerHomeServices
            title="Anti Aging Facial"
            paragraph="The focus of this facial is to target common skin concerns associated with aging, such as fine lines, wrinkles, loss of elasticity, and uneven skin tone."
            image={a2}
          />
          <PerHomeServices
            title="Brightening Facial"
            paragraph="This facial targets dull, uneven skin tone, dark spots, and pigmentation issues, aiming to promote a brighter and more glowing complexion."
            image={a3}
          />
        </div>

        <div className="w-full flex justify-center pt-10">
          <Link
            to="/book-services"
            className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-50 px-8 py-3 rounded-md font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-200"
          >
            See More ...
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
