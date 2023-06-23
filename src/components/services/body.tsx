import { ServicesOffered } from '../../utils/productsOffered'
import PerServices from './perServices'
import SingleService from './services'

export default function ServicesBody() {
  return (
    <div className="bg-[#e7ebf0] mt-6 mb-6 flex-1 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {ServicesOffered.map((service) => (
            <SingleService key={service.id} product={service} />
          ))}
          {/* <PerServices
            images="https://theaiveeclinic.com/wp-content/uploads/2020/06/PRP-FOR-JOINTS-PAIN-MANAGEMENT.jpg"
            title="PRP for Joints Pain Management"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            price="₱ 10,000"
            duration="1 hour"
          />
          <PerServices
            images="https://theaiveeclinic.com/wp-content/uploads/2020/06/BREAST-AUGMENTATION.jpg"
            title="Breast Augmentation"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            price="₱ 10,000"
            duration="1 hour"
          />
          <PerServices
            images="https://theaiveeclinic.com/wp-content/uploads/2020/06/semu.jpg"
            title="Semu"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            price="₱ 10,000"
            duration="1 hour"
          />
          <PerServices
            images="https://theaiveeclinic.com/wp-content/uploads/2020/06/ARTHROSCOPIC-SURGERY.jpg"
            title="Arthroscopic Surgery"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
            price="₱ 10,000"
            duration="1 hour"
          /> */}
        </div>
      </div>
    </div>
  )
}
