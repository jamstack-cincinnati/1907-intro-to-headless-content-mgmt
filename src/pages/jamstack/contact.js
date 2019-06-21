import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const LinksPage = () => (
  <Layout>
    <SEO title="JAMstack Contact" />
    <div class="breadcrumbs">
      <Link to="/">home</Link> / <Link to="/jamstack">about</Link> / contact
    </div>
    <h1>JAMstack Cincinnati Links</h1>
    <ul>
      <li>
        <a href="https://www.meetup.com/JAMstack-Cincinnati/" target="_blank" rel="noreferrer noopener">JAMstack Cincinnati Meetup</a>
      </li>
      <li>
        <a href="https://github.com/jamstack-cincinnati" target="_blank" rel="noreferrer noopener">GitHub Organziation</a>
      </li>
    </ul>
  </Layout>
)

export default LinksPage
