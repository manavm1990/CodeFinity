import { Link } from "gatsby"
import React from "react"
import Image from "../components/Image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="max-w-xs mb-4">
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
  </Layout>
)

export default IndexPage
