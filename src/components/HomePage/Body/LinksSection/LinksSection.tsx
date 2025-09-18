import { ICardInfo } from "@/types/i-card-info.interface";
import CardWrapper from "./CardWrapper";

// TODO: Get Carousel Component that can be used to house the 3 links

export default function LinksSection() {
  const linksInformation: ICardInfo[] = [
    {
      path: '/icons/GitHub-Logo.wine.png',
      url: '',
      name: '',
      style: {},
    },
    {
      path: '/icons/pngwing.com.png',
      url: '',
      name: '',
      style: {},
    },
    {
      path: '/icons/LinkedIn-Icon-Logo.wine.png',
      url: '',
      name: '',
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
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
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

