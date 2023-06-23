import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'

export default function About() {
  return (
    <Layout>
      <div className="container px-4">
        <PageTitle title="About Us" />

        <div className="row py-3">
          <div className="col-md-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptatem
              consequatur quod voluptatibus quas doloribus quidem. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptatem
              consequatur quod voluptatibus quas doloribus quidem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptatem
              consequatur quod voluptatibus quas doloribus quidem. Quisquam
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
