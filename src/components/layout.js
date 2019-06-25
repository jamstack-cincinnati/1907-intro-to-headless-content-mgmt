/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Wrapper = styled.div `
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  margin: 0 auto auto;
  width: calc(100% - 5vw);
  max-width: 960px;
  padding: 0rem 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
        {children}
      </Main>

      <footer style={{ textAlign: 'center', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> for <a href="https://www.meetup.com/JAMstack-Cincinnati/" target="_blank" rel="noopener noreferrer">JAMstack Cincinnati</a>
      </footer>

    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
