"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  fallback?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function SafeImage({
  src,
  alt,
  fallback = "/events/default.png",
  width,
  height,
  fill,
  className,
  priority,
  sizes,
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  // If we already have an error, use native img for fallback
  if (hasError) {
    if (fill) {
      return (
        <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={fallback}
            alt={alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
          />
        </div>
      );
    }
    return (
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  // Use Next.js Image with error handling
  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        onError={() => {
          if (!hasError) {
            setHasError(true);
          }
        }}
        onLoadingComplete={(result) => {
          // Check if image actually loaded
          if (result.naturalWidth === 0) {
            setHasError(true);
          }
        }}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
      onLoadingComplete={(result) => {
        // Check if image actually loaded
        if (result.naturalWidth === 0) {
          setHasError(true);
        }
      }}
    />
  );
}
