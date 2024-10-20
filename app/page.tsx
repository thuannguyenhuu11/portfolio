import AboutSection from '@/components/AboutSection/AboutSection';
import EmailSection from '@/components/EmailSection/EmailSection';
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/HeroSection/HeroSection';
import NavBar from '@/components/Navbar/Navbar';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
