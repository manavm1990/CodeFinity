import { Logo, SEO, Video } from "components"
import React from "react"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Video />

    <div className="h-screen flex justify-center items-center">
      <Logo styles="max-w-xs w-50vw" />
    </div>
  </>
)

export default IndexPage
