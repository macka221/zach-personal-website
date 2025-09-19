import Header from "@/components/Header/Header";
import HomePageBody from "@/components/HomePage/Body/Body";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Zach's Developer Platform",
  description: "Welcome to Zach's Developer Platform - Your Gateway to Innovative Solutions and Cutting-Edge Technology.",
}

export default function Home() {
  return (
    <div className="container-home-page-root">
      <Head>
        <title>{'Zach\'s Developer Platform'}</title>
      </Head>

      <Header />
      <HomePageBody />
    </div>
  );
}
