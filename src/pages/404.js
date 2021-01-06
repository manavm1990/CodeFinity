import { Layout, SEO } from "components"
import { Link } from "gatsby"
import React from "react"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | CodeFinity" />
    <h1>
      404: Not Found{" "}
      <span role="img" aria-label="no-good-man">
        🙅🏾‍♂️
      </span>
    </h1>
    <Link to="/">
      Back Home{" "}
      <span role="img" aria-label="house">
        🏠
      </span>
      ?
    </Link>
  </Layout>
)

export default NotFoundPage
