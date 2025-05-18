import AboutSection from "@/app/components/AboutSection";
import AchievementsSection from "@/app/components/AchievementsSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import ProjectsSection from "@/app/components/ProjectsSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#121212]"
      style={{ scrollBehavior: "smooth" }}>
      {/*顶部菜单栏*/}
      <NavBar />
      <div
        className="container mx-auto py-4 px-12 mt-24"
        style={{ scrollBehavior: "smooth" }}>
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
