import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Card from "~/components/styled/card"

const CategoryList = ({ categories }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {categories.map(({ node }) => {
      return (
        <Card key={node.id}>
          <Link to={`/categories/${node.id.replace("_","-").toLowerCase()}`}>
            <p className="px-4 py-6">{node.name}</p>
          </Link>
        </Card>
      )
    })}
  </div>
)

CategoryList.propTypes = {
  categories: PropTypes.array,
}

export default CategoryList
