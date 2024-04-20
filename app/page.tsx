import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "@/app/components/NavBar";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import AchievementsSection from "@/app/components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        {/*顶部菜单栏*/}
        <NavBar />
      <div className="container mx-auto py-4 px-12 mt-24">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
      </div>
        <Footer />
    </main>
  );
}
