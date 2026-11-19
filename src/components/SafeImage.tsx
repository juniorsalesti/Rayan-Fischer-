import {useState} from 'react';
import {Dumbbell} from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#141416] via-[#0B0B0D] to-[#050505] text-[#C5C7C9] p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Dumbbell className="h-8 w-8 text-[#D6A93C]/70 mb-2" aria-hidden="true" />
        {fallbackLabel && (
          <span className="text-xs tracking-wider uppercase text-[#C5C7C9]/80 text-center">
            {fallbackLabel}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
