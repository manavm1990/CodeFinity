import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="bg-primary mb-6">
      <div className="my-0 mx-auto max-w-screen-lg py-6 px-4">
        <h1 className="m-0">
          <Link to="/" className="text-white no-underline">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
