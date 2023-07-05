import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Divider from "./components/Divider";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import ContactMe from "./scenes/ContactMe";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className="app bg-deep-blue font-poppins ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <Divider />

      <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
      </div>

      <Divider />

      <div className="w-5/6 mx-auto">
          <Projects />
      </div>

      <Divider />

      <div className="w-5/6 mx-auto md:h-full">
          <Testimonials />
      </div>

      <Divider />

      <div className="w-5/6 mx-auto md:h-full">
          <ContactMe />
      </div>

      <Footer/>


      

    </div>
  );
}

export default App;
