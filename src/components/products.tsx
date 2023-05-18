import Product from './product'

const Products = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl">
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

      <h3 className="font-normal text-xs mt-8 text-center">Made with ♡</h3>
    </>
  )
}

export default Products
