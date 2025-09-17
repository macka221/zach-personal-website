import { IMarqueeIcons } from "@/types/i-marquee-icons.type";
import MarqueeWrapper from "./MarqueeWrapper";
import TaglineSection from "./TaglineSection";
import { MarqueeDirection } from "@/types/marquee-direction.enum";

export default function HomePageBody() {
  const languagesAndDatabaseInfo: IMarqueeIcons[] = [
    {
      path: '/icons/Python-logo-notext.svg.png',
      name: 'python',
      style: { maxHeight: 100, maxWidth: 100, paddingLeft: 20, paddingRight: 8 },
    },
    {
      path: '/icons/node-js-javascript-software-developer-computer-icons-angularjs-others-88da8fa7d1e2cae88580ac7ce4ef2b50.png',
      name: 'javascript',
      style: { maxHeight: 150, maxWidth: 150, paddingLeft: 35, paddingRight: 0 },
    },
    {
      path: '/icons/C++-Logo.wine.png',
      name: 'c++',
      style: { paddingLeft: -25, paddingRight: 0 }
    },
    {
      path: '/icons/PostgreSQL-Logo.wine.png',
      name: 'postgres',
      style: { marginLeft: -30, paddingRight: 0 }
    },
    {
      path: '/icons/Java_(programming_language)-Logo.wine.png',
      name: 'java',
      style: { marginLeft: -40, paddingRight: 0 }
    },
    {
      path: '/icons/vecteezy_typescript-programming-language-3d-icon-transparent-background_60194946.png',
      name: 'typescript',
      style: { maxHeight: 145, maxWidth: 145, paddingLeft: -10, paddingRight: 10 },
    },
    {
      path: '/icons/Go_(programming_language)-Logo.wine.png',
      name: 'goLang',
    },
  ];

  const toolsAndTechnologiesInfo: IMarqueeIcons[] = [
    { path: '/', name: 'react' },
    { path: '/', name: 'azure' },
    { path: '/', name: 'kubernetes' },
    { path: '/', name: 'linux' },
    { path: '/', name: 'vue' },
    { path: '/', name: 'pyTorch' },
    { path: '/', name: 'expo-go' },
  ];

  return (
    <div className="home-page-body" >
      <TaglineSection />
      <MarqueeWrapper
        className="languages-and-databases-marquee"
        marqueeImages={languagesAndDatabaseInfo}
        direction={MarqueeDirection.left}
        style={{
          justifyContent: 'space-evenly',
        }}
      />
    </div>
  )
}
