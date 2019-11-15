import React, { FC } from "react"
import H1 from "./components/h1"
import H2 from "./components/h2"

interface HeaderPropType {
  title?: string
  subtitle?: string
}

const Header: FC<HeaderPropType> = ({ title = "", subtitle = "" }) => (
  <header>
    <H1>{title}</H1>
    <H2>{subtitle}</H2>
  </header>
)

export default Header
