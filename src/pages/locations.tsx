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
        description="The cosmetic stores, located at SM City Manila, Greenhills Shopping Center, and a new branch in Candaba, offer high-quality beauty products. The Manila store operates from 10 a.m. to 9 p.m., the Greenhills store from 9 a.m. to 6 a.m., and the Candaba store during regular hours. The stores, which stock a variety of skincare and makeup essentials, are positioned as one-stop beauty destinations. They are open on weekends and conform to mall operating hours."
        pageName="Our Locations"
      />

      <section className="py-9 max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full px-4 md:w-1/3">
              <SingleLocations blog={blog} />
            </div>
          ))}
        </div>

        <div className="wow fadeInUp flex flex-wrap" data-wow-delay=".15s">
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
