import React, { useState, useEffect } from "react";
import { navLinks } from "../../constants";
import { Link as ScrollLink } from "react-scroll";
import GradientText from "../GradientText";
import Dock from "../Dock";
import { VscHome, VscPerson, VscBriefcase, VscAccount } from "react-icons/vsc";
import { FaScrewdriverWrench } from "react-icons/fa6";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e) => setIsDarkMode(e.matches);
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || window.innerWidth < 640);
    const checkTablet = () => setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);

    setIsDarkMode(mediaQuery.matches);
    checkTablet();
    checkMobile(); // Initial check
    window.addEventListener("scroll", handleScroll);
    mediaQuery.addEventListener("change", handleThemeChange);
    window.addEventListener("resize", () => {
      checkMobile();
      checkTablet();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleThemeChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const dockItems = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => scrollToSection('hero') },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => scrollToSection('profile') },
    { icon: <VscBriefcase size={18} />, label: 'Experience', onClick: () => scrollToSection('work') },
    { icon: <FaScrewdriverWrench size={18} />, label: 'Skills', onClick: () => scrollToSection('skills') },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        top: element.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} ${isDarkMode ? "dark-mode" : "light-mode"
          }`}
      >
        <div className="inner">
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={-60}
            className="logo cursor-pointer"
          >
            <GradientText colors={["#1099ff", "#293df9", "#1099ff", "#293df9"]}
              animationSpeed={5}
              showBorder={false}
              className="custom-class">
              SovicheaDev
            </GradientText>
          </ScrollLink>

          <nav className="desktop">
            <ul className="flex gap-6">
              {navLinks.map(({ name, link }) => (
                <li key={name} className="group relative">
                  <ScrollLink
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    spy={true}
                    activeClass="active"
                    className="cursor-pointer text-base font-medium"
                  >
                    {name}
                  </ScrollLink>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-50 transition-all duration-300 group-hover:w-full group-[.active]:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-60}
            className="contact-btn group cursor-pointer"
          >
            <div className="inner">
              <span>Contact Me</span>
            </div>
          </ScrollLink>
        </div>
      </header>

      {(isMobile || isTablet) && (
        <div className="dock-container z-1000">
          <Dock
            items={dockItems}
            panelHeight={60}
            baseItemSize={46}
            magnification={60}
          />
        </div>
      )}

    </>
  );
};

export default NavBar;