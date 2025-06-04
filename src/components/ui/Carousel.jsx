"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef } from "react"

export default function Carousel({ children }) {
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
    created(slider) {
      sliderRef.current = slider.container;
    },
  })

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider w-full">
        {children.map((child, index) => (
          <div className="keen-slider__slide p-2" key={index}>
            {child}
          </div>
        ))}
      </div>

      
    </div>
  )
}
