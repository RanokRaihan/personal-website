import CertificationSection from "@/components/home/CertificationSection";
import ContactMeSection from "@/components/home/ContactMeSection";
import EducationSection from "@/components/home/EducationSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/home/ProjectSection";
import SkillSection from "@/components/home/SkillSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <CertificationSection />
      <EducationSection />
      <ContactMeSection />
    </main>
  );
};

export default HomePage;
