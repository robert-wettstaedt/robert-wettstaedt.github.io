import React, { FC } from "react"
import { sun1, sun2 } from "../../../theme/"

const H1: FC = ({ children }) => (
  <h1
    style={{
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      backgroundClip: "text",
      backgroundImage: `linear-gradient(180deg, ${sun1} 0%, ${sun2} 100%)`,
      fontFamily: `"Permanent Marker", cursive`,
      fontSize: "32px",
      marginBottom: "16px",
      marginTop: "32px",
      textTransform: "uppercase",

      // @media (min-width: $md) {
      //   font-size: 52px;
      //   margin-top: 64px;
      // }
    }}
  >
    {children}
  </h1>
)

export default H1
