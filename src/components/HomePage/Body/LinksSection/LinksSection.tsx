import { ICardInfo } from "@/types/i-card-info.interface";
import CardWrapper from "./CardWrapper";

// TODO: Get Carousel Component that can be used to house the 3 links

export default function LinksSection() {
  const linksInformation: ICardInfo[] = [
    {
      path: '/icons/GitHub-Logo.wine.png',
      url: 'https://github.com/macka221',
      name: 'github logo',
      style: {},
    },
    {
      path: '/icons/pngwing.com.png',
      url: 'https://gitlab.com/zachareal97',
      name: 'gitlab logo',
      style: {
        width: 200,
        height: 200,
        marginTop: 5,
        marginBottom: 8,
      }
    },
    {
      path: '/icons/LinkedIn-Icon-Logo.wine.png',
      url: 'https://www.linkedin.com/in/zachare-lofton1997/',
      name: 'linkedin logo',
      style: {},
    },
  ];

  return (
    <div
      className="body-links-section"
      style={{
        backgroundImage: 'url(/background/UGkuNK.gif)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
      }}
    >
      {
        linksInformation.map((linkInfo, index) =>
          <CardWrapper path={linkInfo.path} url={linkInfo.url} name={linkInfo.name} style={linkInfo.style} key={index} />
        )
      }
    </div>
  );
}

