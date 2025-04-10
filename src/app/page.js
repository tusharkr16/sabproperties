import { ClientMarquee, MarqueeDemo, ReviewCard } from "@/components/Clients";
import CompanyProfile from "@/components/Details";
import HeroSection from "@/components/Hero";
import InfoCards from "@/components/InfoCard";
import ProjectsCarousel from "@/components/Property";
import Services from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-auto">
      <HeroSection />
      <CompanyProfile />
      <ProjectsCarousel />
      <Services />
      <Testimonials />
     <ClientMarquee/>
      {/* <InfoCards/> */}
    </div>
  );
}
