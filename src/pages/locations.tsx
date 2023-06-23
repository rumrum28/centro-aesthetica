import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Layout from '../components/layout'
import blogData from '../components/location/locationData'
import SingleLocations from '../components/location/singleLocation'
import Nav from '../components/nav'

export default function Locations() {
  return (
    <>
      <Nav />
      <Breadcrumb
        description="Welcome to our exquisite cosmetic stores, where beauty meets convenience! Step into our store located at SM City Manila, where we open our doors from 10 a.m. to 9 p.m., offering you a wide range of high-quality cosmetics to enhance your natural radiance. For early risers and late-night shoppers, our store at the Greenhills Shopping Center welcomes you from 9 a.m. to 6 a.m., ensuring you never miss a chance to pamper yourself. Exciting news awaits as we proudly announce our new branch in Candaba, where you can indulge in the world of beauty during our regular store hours. From luxurious skincare products to trendy makeup essentials, our stores are your one-stop destination for all things glamorous. Open on weekends or always during mall hours."
        pageName="Our Locations"
      />

      <section className="py-9 max-w-7xl mx-auto">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleLocations blog={blog} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="wow fadeInUp -mx-4 flex flex-wrap"
          data-wow-delay=".15s"
        >
          <div className="w-full px-4">
            <ul className="flex items-center justify-center pt-8">
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Prev
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  1
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
