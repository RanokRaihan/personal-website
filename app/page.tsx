import AboutMeSection from "@/components/home/AboutMeSection";
import BlogSection from "@/components/home/BlogSection";
import ContactMeSection from "@/components/home/ContactMeSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <SkillSection />
      <ProjectSection />
      <BlogSection />
      <ContactMeSection />
    </main>
  );
};

export default HomePage;
