import ContactMeSection from "@/components/home/ContactMeSection";
import EducationSection from "@/components/home/EducationSection";
import HeroSection from "@/components/home/HeroSection";
import SkillSection from "@/components/home/SkillSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <SkillSection />
      <EducationSection />
      <ContactMeSection />
    </main>
  );
};

export default HomePage;
