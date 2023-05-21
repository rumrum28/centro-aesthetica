export default function Product() {
  return (
    <li className="flex p-4 sm:w-1/2 md:w-1/3">
      <div
        className="bg-white rounded flex flex-col overflow-hidden"
        style={{ boxShadow: '0 20px 40px -14px rgba(0, 0, 0, 0.25)' }}
      >
        <div className="min-h-fit">
          <img
            className="h-auto max-w-full align-middle"
            src="https://picsum.photos/500/300/?image=10"
            height={300}
            width={500}
          />
        </div>
        <div
          className="p-4"
          style={{
            background:
              'linear-gradient(to bottom left, #dba028 40%, #f9e471 100%)',
          }}
        >
          <h2 className="text-white text-lg font-bold capitalize m-0">
            Card Grid Layout
          </h2>
          <p className="text-white text-sm leading-normal mb-5 font-normal">
            Demo of pixel perfect pure CSS simple responsive card grid layout
          </p>
          <button
            className="text-white p-3 text-sm uppercase rounded font-normal block w-full cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-5"
            style={{ border: '1px solid rgba(255, 255, 255, 0.2)' }}
          >
            Read More
          </button>
        </div>
      </div>
    </li>
  )
}
