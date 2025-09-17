import { CSSProperties } from "react";

export default function MarqueeIcon({ iconImagePath, className, style }: { iconImagePath: string, className: string, style?: CSSProperties }) {
  return (
    <span className={`marquee ${className}`}>
      <img
        src={iconImagePath}
        style={{
          maxHeight: 200,
          maxWidth: 200,
          justifyContent: 'space-around',
          ...style
        }}
      />
    </span>
  )
}

