import SectionTitle from './SectionTitle'
import PerHomeServices from './perHomeServices'

const HomeServices = () => {
  return (
    <section className="max-w-6xl mx-auto w-full p-5">
      <div className="border-b border-body-color/[.15] pb-6 dark:border-white/[.15] md:pb-20 lg:pb-11">
        <SectionTitle title="Our Services" paragraph="" mb="44px" />

        <div className="flex justify-around items-start gap-2">
          <PerHomeServices
            title="Primary Care Services"
            paragraph="Receive comprehensive medical care from our experienced doctors and nurses. We provide regular check-ups, diagnostic services and treatment for any illness."
            image="https://images.unsplash.com/photo-1613377512507-92803ec4ef17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxMHx8bWVkaWNhbCUyMGNsaW5pY3xlbnwwfHx8fDE2ODk1NzE2ODh8MA&ixlib=rb-4.0.3&q=80&w=1080"
          />
          <PerHomeServices
            title="Specialized Clinics"
            paragraph="Get specialized care from our expert doctors for your specific health needs. We offer clinics for dermatology, gynecology, and more."
            image="https://images.unsplash.com/photo-1578307985320-34b61a66c195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyMXx8bWVkaWNhbCUyMGNsaW5pY3xlbnwwfHx8fDE2ODk1NzE2ODh8MA&ixlib=rb-4.0.3&q=80&w=1080"
          />
          <PerHomeServices
            title="Emergency Care"
            paragraph="Our clinic is equipped to handle emergencies. We provide life-saving medical care to patients who require immediate attention."
            image="https://images.unsplash.com/photo-1580281657702-257584239a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyN3x8bWVkaWNhbCUyMGNsaW5pY3xlbnwwfHx8fDE2ODk1NzE2ODh8MA&ixlib=rb-4.0.3&q=80&w=1080"
          />
        </div>

        <div className="w-full flex justify-center pt-10">
          <button className="bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-50 px-8 py-3 rounded-md font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-200">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeServices
