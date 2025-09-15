import { CSSProperties } from "react";

export default function MarqueeIcon({ iconImagePath, className, style }: { iconImagePath: string, className: string, style?: CSSProperties }) {
  return (
    <div className={`marquee ${className}`}>
      <img
        src={iconImagePath}
        style={{
          alignItems: 'center',
          height: '10%',
          width: '10%',
          marginLeft: '-20%',
          marginRight: '-20%',
          ...style
        }}
      />
    </div>
  )
}

