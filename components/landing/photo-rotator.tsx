"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type ImageItem = {
  src: string
  alt: string
  label?: string
}

type Props = {
  images: ImageItem[]
  intervalMs?: number
  className?: string
  imageClassName?: string
  priority?: boolean
  labelClassName?: string
}

export function PhotoRotator({
  images,
  intervalMs = 2000,
  className,
  imageClassName,
  priority = false,
  labelClassName,
}: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [images.length, intervalMs])

  if (images.length === 0) return null

  const currentLabel = images[index]?.label

  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      {images.map((image, imageIndex) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={priority && imageIndex === 0}
          sizes="(max-width: 1024px) 100vw, 45vw"
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            imageIndex === index ? "opacity-100" : "opacity-0",
            imageClassName
          )}
        />
      ))}
      {currentLabel ? (
        <figcaption
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-background/90 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary",
            labelClassName
          )}
        >
          {currentLabel}
        </figcaption>
      ) : null}
    </div>
  )
}
