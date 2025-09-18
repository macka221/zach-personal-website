import Header from "@/components/Header/Header";
import HomePageBody from "@/components/HomePage/Body/Body";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container-home-page-root">
      <Header />
      <HomePageBody />
    </div>
  );
}
