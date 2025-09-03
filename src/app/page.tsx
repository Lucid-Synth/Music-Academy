import HeroSection from "@/components/HeroSection";
import FeturedCourses from "@/components/FeturedCourses";
import { main } from "motion/react-client";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeturedCourses />
      <WhyChooseUs />
    </main>
  );
}
