"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { cn } from "@/lib/utils"

interface InteractiveMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  direction?: "forward" | "backward"
  speed?: number
}

export function InteractiveMarquee({
  children,
  direction = "forward",
  speed = 1,
  className,
  ...props
}: InteractiveMarqueeProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({
        playOnInit: true,
        speed,
        direction,
        stopOnInteraction: false,
      }),
    ]
  )

  return (
    <div
      className={cn("overflow-hidden cursor-grab active:cursor-grabbing w-full py-4", className)}
      ref={emblaRef}
      {...props}
    >
      <div className="flex touch-pan-y -ml-4">
        {React.Children.map(children, (child) => (
          <div className="flex-none pl-4 h-full">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
