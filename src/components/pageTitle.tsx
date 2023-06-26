type PageTitleProps = {
  title: string
  additionalClass?: string | undefined
}

const PageTitle = ({ title, additionalClass }: PageTitleProps) => {
  return (
    <h1
      className={`text-xl font-semibold font-serif dark:text-white ${additionalClass}`}
    >
      {title}
    </h1>
  )
}

export default PageTitle
