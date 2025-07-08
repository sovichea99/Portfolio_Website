import Aurora from "./components/Aurora";
import AnimatedCounter from "./components/HeroModels/AnimatedCounter";
import NavBar from "./components/HeroModels/Navbar.jsx";
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ProfileSection from "./sections/ProfileSection";
import ShowcaseSeciton from "./sections/ShowcaseSeciton";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <NavBar />
      <Hero />
      <ProfileSection />
      <AnimatedCounter />
      <ShowcaseSeciton />
      <ExperienceSection />
      <TechStack />
      <Testimonials/>
      <Contact/>
    </div>
  );
};


export default App;
