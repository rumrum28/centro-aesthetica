import { ServicesOffered } from '../../utils/productsOffered'
import SingleService from './services'

export default function ServicesBody() {
  return (
    <div className="bg-[#e7ebf0] mt-6 mb-6 flex-1 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {ServicesOffered.map((service) => (
            <SingleService key={service.id} product={service} />
          ))}
        </div>
      </div>
    </div>
  )
}
