import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import QuoteBlock from "../components/quote-block";

const QuotePage = ({ data }) => (
  <Layout>
    <SEO title="Quotes" />
    <div className="breadcrumbs">
      <Link to="/">home</Link> / quotes
    </div>
    {data.allContentfulQuote.edges.map((q, idx) => (
      <QuoteBlock
        contentful_id={q.node.contentful_id}
        quote={q.node.body.body}
        name={q.node.attribution}
        key={`quote-${idx}`}
      />
    ))}
  </Layout>
);

export default QuotePage;

export const query = graphql`
  query QuoteQuery {
    allContentfulQuote {
      edges {
        node {
          id
          contentful_id
          attribution
          body {
            body
          }
        }
      }
    }
  }
`;
