import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Banner = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Header = ({ siteTitle }) => (
  <Banner>
    <div style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`
    }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/"
          css={`
            color: white;
            text-decoration: none;
            &:hover{
              text-decoration: underline;
            }
          `}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Banner>
)

/*
  This file shows three different ways of applying styles:
    `Banner` and uses styled-components
    `div` uses an inline style object
    `Link` uses inline styled-components
*/

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
