import { graphql, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import { background, foreground } from "../theme/"
import Header from "./header/"
import "./layout.css"

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  return (
    <div
      style={{
        alignItems: "center",
        background: `linear-gradient(180deg, ${foreground} 0%, ${background} 100%)`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
        position: "relative",
        width: "100vw",
      }}
    >
      <Header
        title={data.site.siteMetadata.title}
        subtitle={data.site.siteMetadata.subtitle}
      />
      <main>{children}</main>
    </div>
  )
}

export default Layout
