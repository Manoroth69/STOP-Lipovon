"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef } from "react"

export default function Carousel({ children }) {
  const sliderContainerRef = useRef(null)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  })

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // ✅ Forțăm update când slider devine vizibil (ex: după schimbarea tabului)
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      instanceRef.current?.update()
    })

    if (sliderContainerRef.current) {
      observer.observe(sliderContainerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sliderContainerRef} className="relative w-full">
      <div ref={sliderRef} className="keen-slider w-full">
        {children.map((child, index) => (
          <div
            key={index}
            className="keen-slider__slide p-2"
            style={{ minWidth: "320px" }} // ✅ carduri decente și consistente
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
