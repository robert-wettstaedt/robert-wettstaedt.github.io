import React, { FC } from "react"

interface LinearGradientPropType {
  index: number
  color: "#281D4C" | "#342562" | "#2E2157"
}

const LinearGradient: FC<LinearGradientPropType> = ({ index, color }) => (
  <linearGradient
    id={`gradient${index}`}
    x1="-99.99%"
    style={{ transform: "rotate(90deg)" }}
  >
    <stop offset="0%" stopColor={color}></stop>
    <stop offset="50%" stopColor={color}></stop>
    <stop offset="51%" stopColor="transparent"></stop>
    <animate
      attributeName="x1"
      begin={`animateGradient${index - 1}.end`}
      dur="150ms"
      fill="freeze"
      from="-99.99%"
      id={`animateGradient${index}`}
      repeatCount="1"
      to="99.99%"
    />
  </linearGradient>
)

export default LinearGradient
