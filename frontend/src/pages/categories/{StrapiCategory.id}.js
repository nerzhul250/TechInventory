import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import PageHeading from "~/components/styled/page-heading"
import ProductList from "~/components/product-list"
import SEO from "~/components/seo"

const CategoryPage = ({ data }) => {
  const products = data.strapiCategory.products
  const seo = {
    title: data.strapiCategory.name,
  }

  return (
    <Layout>
      <SEO seo={seo} />
      <div>
        <PageHeading>{data.strapiCategory.name}</PageHeading>
        <ProductList products={products} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CategoryQuery($id: String!) {
    strapiCategory(id: { eq: $id }) {
      name
      products {
        name
        price
        id
      }
    }
  }
`

export default CategoryPage
