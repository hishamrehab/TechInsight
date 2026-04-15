import { useEffect, useState } from 'react'
import type { ImgHTMLAttributes, SyntheticEvent } from 'react'

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string
}

const defaultFallbackSrc = '/images/placeholder.svg'

export function SafeImage({ src, fallbackSrc = defaultFallbackSrc, onError, ...props }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  useEffect(() => {
    setCurrentSrc(src)
  }, [src])

  function handleError(event: SyntheticEvent<HTMLImageElement, Event>) {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
    }
    onError?.(event)
  }

  return <img {...props} onError={handleError} src={currentSrc} />
}
