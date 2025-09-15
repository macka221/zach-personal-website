import { IMarqueeIcons } from "@/types/i-marquee-icons.type";
import MarqueeWrapper from "./MarqueeWrapper";
import TaglineSection from "./TaglineSection";

export default function HomePageBody() {
  const languagesAndDatabaseInfo: IMarqueeIcons[] = [
    {
      path: '/icons/Python-logo-notext.svg.png',
      name: 'python',
      style: { height: '7%', width: '7%' },
    },
    {
      path: '/icons/node-js-javascript-software-developer-computer-icons-angularjs-others-88da8fa7d1e2cae88580ac7ce4ef2b50.png',
      name: 'javascript',
      style: { height: '20%', width: '20%' },
    },
    {
      path: '/icons/C++-Logo.wine.png',
      name: 'c++',
      style: { height: '7%', width: '7%' },
    },
    {
      path: '/icons/PostgreSQL-Logo.wine.png',
      name: 'postgres',
      style: { height: '7%', width: '7%' },
    },
    {
      path: '/icons/Java_(programming_language)-Logo.wine.png',
      name: 'java',
      style: { height: '7%', width: '7%' },
    },
    {
      path: '/icons/vecteezy_typescript-programming-language-3d-icon-transparent-background_60194946.png',
      name: 'typescript',
      style: { height: '4%', width: '4%' },
    },
    {
      path: '/icons/Go_(programming_language)-Logo.wine.png',
      name: 'goLang',
      style: { height: '7%', width: '7%' },
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
      />
    </div>
  )
}
