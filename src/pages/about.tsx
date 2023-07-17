import { Link } from 'react-router-dom'
import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'

export default function About() {
  return (
    <Layout>
      <div className="container px-4">
        <PageTitle title="About Us" />

        <div className="row py-3 text-black dark:text-slate-400">
          <div className="col-md-12">
            <p className="indent-5 pb-5">
              Centro Aesthetica is a medical clinic located in{' '}
              <Link to="/our-locations" className="text-primary underline">
                see locations
              </Link>
              . We specialize in providing top-notch aesthetic and medical
              services to our clients. Our team of experienced doctors and staff
              are dedicated to ensuring that our clients receive the highest
              quality of care. We believe that everyone deserves to look and
              feel their best, and we strive to make that a reality for our
              clients.
            </p>
            <p className="indent-5 pb-5">
              At Centro Aesthetica, we pride ourselves on our commitment to
              excellence. We use the latest technology and techniques to ensure
              that our clients receive the most effective treatments possible.
              Whether you're looking for a simple cosmetic procedure or a more
              complex medical treatment, our team is here to help. We believe
              that every client deserves personalized care, and we work closely
              with each individual to develop a treatment plan that meets their
              unique needs and goals. Contact us today to learn more about our
              services and how we can help you achieve your aesthetic and
              medical goals.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
