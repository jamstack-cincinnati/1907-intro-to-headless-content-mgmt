import React from "react"

const Footer = () => (
  <footer style={{ textAlign: 'center', fontSize: '0.8rem' }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> for <a href="https://www.meetup.com/JAMstack-Cincinnati/" target="_blank" rel="noopener noreferrer">JAMstack Cincinnati</a>
  </footer>
)

export default Footer
