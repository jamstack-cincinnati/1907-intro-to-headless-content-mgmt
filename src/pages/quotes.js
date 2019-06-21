import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quote from "../components/quote"
import data from "../resources/data.yml"

const QuotePage = () => (
  <Layout>
    <SEO title="Quotes" />
    <div className="breadcrumbs">
      <Link to="/">home</Link> / quotes
    </div>
    <h1>Hi from the second page</h1>

    {data.map((q, idx) => (
      <Quote
        quote={q.quote}
        name={q.name}
        votes={q.votes}
        key={`quote-${idx}`} />
    ))}

  </Layout>
)

export default QuotePage
