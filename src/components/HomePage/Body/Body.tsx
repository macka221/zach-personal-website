import { IMarqueeIcons } from "@/types/i-marquee-icons.type";
import MarqueeWrapper from "./MarqueeWrapper";
import TaglineSection from "./TaglineSection";
import { MarqueeDirection } from "@/types/marquee-direction.enum";
import LinksSection from "./LinksSection/LinksSection";
import ContactSection from "./ContactSection/ContactSection";

//TODO: Move both objects for Homepage carousels to their own respective constants folder.

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
    {
      path: '/icons/React_(web_framework)-Logo.wine.png',
      name: 'react',
      style: { maxHeight: 140, maxWidth: 140, marginRight: 50 },
    },
    {
      path: '/icons/Azure-Logo-PNG-Clipart.png',
      name: 'azure',
      style: { maxWidth: 80, maxHeight: 80, marginRight: 50 },
    },
    {
      path: '/icons/Kubernetes-Logo.wine.png',
      name: 'kubernetes',
      style: { maxHeight: 160, maxWidth: 160 },
    },
    {
      path: '/icons/Linux-Logo.wine.png',
      name: 'linux',
      style: { marginLeft: -30, marginRight: -20 },
    },
    {
      path: '/icons/Vue.js-Logo.wine.png',
      name: 'vue',
      style: { maxHeight: 140, maxWidth: 140, marginRight: 30 },
    },
    {
      path: '/icons/icons8-pytorch-256.png',
      name: 'pyTorch',
      style: { maxHeight: 90, maxWidth: 90, marginRight: 70 },
    },
    {
      path: '/icons/expo-go-app-seeklogo.png',
      name: 'expo-go',
      style: { maxHeight: 90, maxWidth: 90, marginRight: 60 },
    },
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
      <LinksSection />
      <MarqueeWrapper
        className="tools-and-technologies-marquee"
        marqueeImages={toolsAndTechnologiesInfo}
        direction={MarqueeDirection.right}
        style={{
          justifyContent: 'space-evenly',
        }}
      />
      <ContactSection />
      <div
        className="footer"
        style={{
          backgroundColor: '#1E1E1E',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          justifyContent: 'space-between',
          fontSize: 60,
          color: '#2FE517',
          fontWeight: 'bold'
        }}
      >
        I am a footer
      </div>
    </div>
  )
}
