import React, { FC } from "react"
import Layout from "../components/layout"
import Mountains from "../components/mountains/"
import SEO from "../components/seo"

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Mountains />
    </Layout>
  )
}

export default IndexPage
