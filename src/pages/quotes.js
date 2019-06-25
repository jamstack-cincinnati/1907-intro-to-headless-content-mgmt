import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import QuoteBlock from "../components/quote-block"
import data from "../resources/data.yml"

const QuotePage = () => (
  <Layout>
    <SEO title="Quotes" />
    <div className="breadcrumbs">
      <Link to="/">home</Link> / quotes
    </div>

    {data.map((q, idx) => (
      <QuoteBlock
        quote={q.quote}
        name={q.name}
        votes={q.votes}
        key={`quote-${idx}`} />
    ))}

  </Layout>
)

export default QuotePage
