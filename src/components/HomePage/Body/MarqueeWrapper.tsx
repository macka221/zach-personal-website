import Marquee from "react-fast-marquee";
import MarqueeIcon from "./MarqueeIcon";
import { CSSProperties } from "react";
import { IMarqueeIcons } from "@/types/i-marquee-icons.type";

export default function MarqueeWrapper({ marqueeImages, className, style }: { marqueeImages: IMarqueeIcons[], className?: string, style?: CSSProperties }) {
  return (
    <div className={className}>
      <Marquee autoFill play direction="left" style={{ ...style }} speed={400}>
        {
          marqueeImages.map((imageData, index) =>
            <MarqueeIcon
              iconImagePath={imageData.path}
              key={index}
              className={`${imageData.name}-icon`}
              style={{ ...imageData.style }}
            />
          )
        }
      </Marquee>
    </div>
  )
}
