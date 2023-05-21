import Product from './product'

const Products = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl mt-4 mb-4">
        <h1 className="text-2xl font-normal text-center">
          Responsive Card Grid Layout
        </h1>

        <ul className="flex flex-wrap m-0 p-0">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </div>
    </>
  )
}

export default Products
