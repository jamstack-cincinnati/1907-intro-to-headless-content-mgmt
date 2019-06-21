import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="JAMstack" />
    <div class="breadcrumbs">
      <Link to="/">home</Link> / about
    </div>
    <h1>About JAMstack</h1>
    <p>
      The JAMstack is not about specific technologies. It’s a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience. No rendering means greatly reduced attack surface area for malware, ultra fast hosting on CDN, no debugging php or optimizing render times, and a super cheap way to scale your hosting.
    </p>
    <ul>
      <li>
        <Link to="/jamstack/contact">Contact Links</Link>
      </li>
    </ul>
  </Layout>
)

export default AboutPage
