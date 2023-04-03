import React from 'react'
import Product from './product'

const Products = () => {
  return (
    <div className="container  my-12 mx-auto px-4 md:max-w-6xl">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Products
