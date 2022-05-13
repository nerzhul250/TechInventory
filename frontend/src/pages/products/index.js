import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import PageHeading from "~/components/styled/page-heading"
import ProductList from "~/components/product-list"
import SEO from "~/components/seo"

const SearchPage = ({
  data: {
    allStrapiProduct: { edges },
  },
}) => {
  const flatProducts = edges.map(({ node }) => node)

  const seo = { title: "Products" }

  return (
    <Layout>
      <SEO seo={seo} />
      <PageHeading>Products</PageHeading>
      <ProductList products={flatProducts} />
    </Layout>
  )
}

export const searchPageQuery = graphql`
  query ProductSearchQuery {
    allStrapiProduct {
      edges {
        node {
          name
          price
          id
          description
        }
      }
    }
  }
`

export default SearchPage
