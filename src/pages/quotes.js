import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuotePage = () => (
  <Layout>
    <SEO title="Quotes" />
    <div className="breadcrumbs">
      <Link to="/">home</Link> / quotes
    </div>
    <h1>Hi from the second page</h1>
    <p>Welcome to the quotes page</p>
  </Layout>
)

export default QuotePage
