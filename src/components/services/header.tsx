import HeaderButtons from './headerButtons'

export default function ProfileHeader() {
  return (
    <div className="dark:bg-gray-700 dark:border-0">
      <div className="container mx-auto mb-4">
        <h2 className="text-slate-700 dark:text-slate-50 text-2xl w-full text-center sm:text-left mt-4 sm:mt-0 font-bold">
          Book Services
        </h2>
      </div>

      <HeaderButtons />
    </div>
  )
}
