import {useState} from 'react';
import {ASSETS} from '../constants';

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({className = 'h-8 w-auto'}: BrandMarkProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="2"
          stroke="#D6A93C"
          strokeWidth="1.5"
        />
        <path
          d="M11 29V11H18.5C21.5 11 23.2 12.6 23.2 15.2C23.2 17.5 21.8 19 19.4 19.4L23.8 29H20.4L16.4 19.7H14V29H11ZM14 17.2H18.1C19.5 17.2 20.2 16.5 20.2 15.3C20.2 14.1 19.5 13.5 18.1 13.5H14V17.2Z"
          fill="#FFFFFF"
        />
        <path
          d="M25.5 29V11H31.5V13.6H28.4V18.7H31V21.2H28.4V29H25.5Z"
          fill="#D6A93C"
        />
      </svg>
    );
  }

  return (
    <img
      src={ASSETS.brandLogo}
      alt="Logo Rayan Fischer Personal Trainer"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`object-contain select-none ${className}`}
    />
  );
}
