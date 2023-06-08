import Layout from '../components/layout'
import ServicesBody from '../components/services/body'
import ProfileHeader from '../components/services/header'

export default function Services() {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen ">
        <ProfileHeader />
        <ServicesBody />
      </div>
    </Layout>
  )
}
