import React, { FC } from "react"
import { sun1, sun2 } from "../../../theme/"

const H2: FC = ({ children }) => (
  <h2
    style={{
      "-webkit-text-fill-color": "transparent",
      "-webkit-background-clip": "text",
      animation: "textshine infinite 6s",
      backgroundClip: "text",
      backgroundImage: `linear-gradient(180deg, ${sun1} 0%, ${sun2} 100%)`,
      fontSize: "16px",
      // @media (min-width: $md) {
      //   font-size: 52px;
      //   margin-top: 64px;
      // }
    }}
  >
    {children}
  </h2>
)

export default H2
