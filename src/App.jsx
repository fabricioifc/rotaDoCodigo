import Navbar from "./Navbar";
import Slider from "./Slider";
import WhoWeAre from "./Whoweare";
import ProjectsSection from "./projectsSection";
import Footer from "./Footer";
import AboutSection from "./AboutProject";
import ContactPage from "./contactPage";
import { Routes, Route } from "react-router-dom";
import CTASetcion from "./CTASetcion";
import GallerySection from "./GallerySection";
import AboutPage from "./AboutPage";


function Home() {
  return (
    <>
      <Slider />
      <AboutSection />
      <WhoWeAre />
      <ProjectsSection />
      <CTASetcion />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/galeria" element={<GallerySection />} />
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
