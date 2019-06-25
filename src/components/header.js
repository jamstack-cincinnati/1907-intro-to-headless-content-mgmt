import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Banner = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;

const Header = ({ siteTitle }) => (
  <Banner>
    <div style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`
    }}>
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </h1>
    </div>
  </Banner>
)

/*
  This file shows three different ways of applying styles:
    - `Banner` uses styled-components
    - `StyledLink` uses styled-components to extend the Gatsby `Link`
    - `div` and `h1` use an inline style object
*/

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
