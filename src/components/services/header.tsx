import PageTitle from '../pageTitle'
import HeaderButtons from './headerButtons'

export default function ProfileHeader() {
  return (
    <div className="dark:bg-[#202938] dark:border-0">
      <PageTitle title="Book Services" additionalClass="p-3" />

      <HeaderButtons />
    </div>
  )
}
