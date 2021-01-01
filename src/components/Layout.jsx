/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import Header from "./Header"

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="m-0-auto max-w-lg pt-0 px-4 pb-6">
      <main>{children}</main>
      <footer className="mt-8">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
