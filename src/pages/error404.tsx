export default function Error404() {
  return (
    // create a tailwind error page
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-4xl font-bold">Page not found</h2>
      <p className="text-2xl mt-10">Please try again later...</p>
    </div>
  )
}
