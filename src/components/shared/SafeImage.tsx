import { useEffect, useState } from 'react'
import type { ImgHTMLAttributes, SyntheticEvent } from 'react'

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string | string[]
}

const defaultFallbackSrc = '/images/placeholder.svg'
const transparentPixel =
  'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

export function SafeImage({ src, fallbackSrc = defaultFallbackSrc, onError, ...props }: SafeImageProps) {
  const fallbackChain = Array.isArray(fallbackSrc) ? fallbackSrc : [fallbackSrc]
  const normalizedFallbacks = [...new Set([...fallbackChain.filter(Boolean), defaultFallbackSrc])]

  const [currentSrc, setCurrentSrc] = useState(src)

  useEffect(() => {
    setCurrentSrc(src)
  }, [src])

  function handleError(event: SyntheticEvent<HTMLImageElement, Event>) {
    if (typeof currentSrc === 'string') {
      const currentFallbackIndex = normalizedFallbacks.indexOf(currentSrc)

      if (currentFallbackIndex >= 0 && currentFallbackIndex < normalizedFallbacks.length - 1) {
        setCurrentSrc(normalizedFallbacks[currentFallbackIndex + 1])
      } else if (currentFallbackIndex === -1 && normalizedFallbacks.length > 0) {
        setCurrentSrc(normalizedFallbacks[0])
      } else {
        setCurrentSrc(transparentPixel)
      }
    } else if (normalizedFallbacks.length > 0) {
      setCurrentSrc(normalizedFallbacks[0])
    } else {
      setCurrentSrc(transparentPixel)
    }

    onError?.(event)
  }

  return <img {...props} onError={handleError} src={currentSrc} />
}
