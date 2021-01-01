import { Layout, SEO } from "components"
import { Link } from "gatsby"
import React from "react"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | CodeFinity" />
    <h1>404: Not Found 🙅🏾‍♂️</h1>
    <Link to="/">Back Home 🏠?</Link>
  </Layout>
)

export default NotFoundPage
