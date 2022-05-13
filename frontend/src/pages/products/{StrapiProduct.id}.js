import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import ProductList from "~/components/product-list"
import SEO from "~/components/seo"
import Image from "~/components/image"

import { formatPrice } from "~/helpers/currency-formatter"

const ProductPage = ({ data }) => {
  const product = data.strapiProduct

  const seo = {
    name: product.name
  }
  return (
    <Layout>
      <SEO seo={seo} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 mt-4">
        <div className={`flex flex-col justify-1`}>
          <div className="mb-4">
            <h1 className="text-4xl mb-1">{product.name}</h1>
            {product.price && (
              <div className="text-sm flex justify-between">
                <p className="font-extralight">Price</p>
                <p>{formatPrice(product.price)}</p>
              </div>
            )}
            {product.stock && (
              <div className="text-sm flex justify-between">
                <p className="font-extralight">Stock</p>
                <p>{product.stock}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="my-6 mb-24">
        <h1 className="text-4xl font-bold text-center">Product Description</h1>
        <hr className="mt-6 mb-12 m-auto w-24 border-t-4" />
        <ReactMarkdown
          className="prose md:w-4/5 m-auto"
          children={product.description}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($id: String!) {
    strapiProduct(id: { eq: $id }) {
      name
      description
      id
      price
      stock
    }
  }
`

export default ProductPage
