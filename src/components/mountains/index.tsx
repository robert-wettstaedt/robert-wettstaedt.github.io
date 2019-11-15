import React, { FC, useRef, useEffect } from "react"
import LinearGradient from "./components/linear-gradient"
import { sun1, sun2 } from "../../theme/"

const Mountains: FC = () => {
  const pathRef = useRef<SVGPathElement>(null)
  const animateRef = useRef(null)

  useEffect(() => {
    pathRef.current.style.strokeDashoffset = "-170"
    window.setTimeout(() => animateRef.current.beginElement(), 300)
  }, [])

  return (
    <svg
      width="114"
      height="19"
      viewBox="0 0 114 19"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        bottom: "-10px",
        height: "auto",
        position: "relative",
        width: "120vw",
      }}
    >
      <defs>
        <linearGradient id="gradient" x1="0">
          <stop offset="0%" stopColor={sun1}></stop>
          <stop offset="50%" stopColor={sun2}></stop>
        </linearGradient>
        <linearGradient
          id="gradient1"
          x1="-99.99%"
          style={{ transform: "rotate(90deg)" }}
        >
          <stop offset="0%" stopColor="#2E2157"></stop>
          <stop offset="50%" stopColor="#2E2157"></stop>
          <stop offset="51%" stopColor="transparent"></stop>
          <animate
            attributeName="x1"
            begin="indefinite"
            dur="300ms"
            fill="freeze"
            from="-99.99%"
            id="animateGradient1"
            ref={animateRef}
            repeatCount="1"
            to="99.99%"
          />
        </linearGradient>
        <LinearGradient index={2} color="#342562" />
        <LinearGradient index={3} color="#281D4C" />
        <LinearGradient index={4} color="#2E2157" />
        <LinearGradient index={5} color="#342562" />
        <LinearGradient index={6} color="#281D4C" />
        <LinearGradient index={7} color="#2E2157" />
        <LinearGradient index={8} color="#2E2157" />
        <LinearGradient index={9} color="#281D4C" />
        <LinearGradient index={10} color="#342562" />
        <LinearGradient index={11} color="#281D4C" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <polygon
          fill="url(#gradient1)"
          points="12.9892953 3.21390374 24.9785905 19 1 19"
        />
        <polygon
          fill="url(#gradient3)"
          points="32.5618198 1 47.9480821 19 17.1755575 19"
        />
        <polygon
          fill="url(#gradient11)"
          points="97.6137377 1 113 19 82.2274755 19"
        />
        <polygon
          fill="url(#gradient6)"
          points="59.2479929 10 74.6342551 19 43.8617306 19"
        />
        <polygon
          fill="url(#gradient9)"
          points="83.925959 8.50802139 99.3122212 18.9518717 68.5396967 18.9518717"
        />
        <polygon
          fill="url(#gradient4)"
          points="44.5611062 11.1069519 56.5504014 19 32.5718109 19"
        />
        <polygon
          fill="url(#gradient7)"
          points="68.5396967 11.1069519 80.528992 19 56.5504014 19"
        />
        <polygon
          fill="url(#gradient8)"
          points="74.624264 7.44919786 86.6135593 19 62.6349688 19"
        />
        <polygon
          fill="url(#gradient2)"
          points="20.3377342 7.44919786 27.6861731 19 12.9892953 19"
        />
        <polygon
          fill="url(#gradient5)"
          points="51.909545 7.44919786 59.2579839 19 44.5611062 19"
        />
        <polygon
          fill="url(#gradient10)"
          points="87.8124888 5.90909091 96.2049955 19 79.4199822 19"
        />
        <path
          d="M.891 18.045L12.996 2.18l5.41 7.138 1.957-3.06 2.892 4.601L32.55 0l9.939 11.594 2.089-1.338 3.364 2.299 3.964-6.297 3.363 5.336 3.965-2.435 5.804 3.396 3.555-2.299 1.255.875 4.773-4.642 4.551 4.37 4.77-3.216 1.384.946 2.532-3.857 2.41 3.857L97.6 0l15.501 18.045"
          ref={pathRef}
          stroke="url(#gradient)"
          strokeDasharray="85 170"
          strokeDashoffset="85"
          strokeLinecap="round"
          strokeWidth="0.2"
          style={{ transition: "stroke-dashoffset 3s linear" }}
          transform="translate(0 1)"
        />
      </g>
    </svg>
  )
}

export default Mountains
