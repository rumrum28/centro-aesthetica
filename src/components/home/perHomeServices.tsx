import CheckIcon from '@mui/icons-material/Check'

type Props = {
  title: string
  paragraph: string
  image: string
}

const PerHomeServices = ({ title, paragraph, image }: Props) => {
  return (
    <div className="w-full lg:px-0 rounded overflow-hidden">
      <div className="flex items-center justify-center w-full h-16 md:h-40 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <img src={image} alt={title} />
      </div>

      <h2 className="text-xs pt-3 md:text-2xl font-bold text-slate-800 dark:text-slate-50">
        {title}
      </h2>
      <p className="hidden md:block text-base text-slate-600 dark:text-slate-300">
        {paragraph}
      </p>
    </div>
  )
}

export default PerHomeServices
