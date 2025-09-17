import MarqueeIcon from "./MarqueeIcon";
import { CSSProperties } from "react";
import { IMarqueeIcons } from "@/types/i-marquee-icons.type";
import Marquee from "react-fast-marquee";
import { MarqueeDirection } from "@/types/marquee-direction.enum";

export default function MarqueeWrapper({ marqueeImages, direction, className, style }: { marqueeImages: IMarqueeIcons[], direction: MarqueeDirection, className?: string, style?: CSSProperties }) {
  return (
    <div className={className}>
      <Marquee autoFill play gradient gradientColor="gray" gradientWidth={12} direction={direction} style={{ ...style }}>
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
