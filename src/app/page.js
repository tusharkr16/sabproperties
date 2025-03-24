import CompanyProfile from "@/components/Details";
import HeroSection from "@/components/Hero";
import InfoCards from "@/components/InfoCard";
import ProjectsCarousel from "@/components/Property";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-auto">
      <HeroSection/>
      <CompanyProfile/>
      <ProjectsCarousel/>
      {/* <InfoCards/> */}
    </div>
  );
}
