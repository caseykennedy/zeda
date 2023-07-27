import * as React from 'react'
import Image, { type ImageProps } from 'next/image'

const Img = React.forwardRef<HTMLImageElement, ImageProps>(
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
