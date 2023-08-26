import React, { forwardRef } from 'react'
import Image, { type ImageProps } from 'next/image'

type ImgProps = ImageProps

const Img = forwardRef<HTMLImageElement, ImgProps>(
  ({ src, alt, ...props }, ref) => {
    return (
      <Image
        ref={ref}
        src={src}
        alt={alt}
        placeholder="blur"
        quality={80}
        {...props}
      />
    )
  }
)

Img.displayName = 'Img'

export default Img
