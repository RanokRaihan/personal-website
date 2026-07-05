import CertificationSection from "@/components/home/CertificationSection";
import ContactMeSection from "@/components/home/ContactMeSection";
import EducationSection from "@/components/home/EducationSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectSection from "@/components/home/ProjectSection";
import ServicesSection from "@/components/home/ServicesSection";
import SkillSection from "@/components/home/SkillSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialSection from "@/components/home/TestimonialSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <SkillSection />
      <ProjectSection />
      <CertificationSection />
      <EducationSection />
      <TestimonialSection />
      <ContactMeSection />
    </main>
  );
};

export default HomePage;
