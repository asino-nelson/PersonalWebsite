import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyle = `relative bg-yellow before:absolute before:w-4
    before:h-4 before:rounded-full before:border-2 before:border-yellow  
    before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[50%] right-7">
      <AnchorLink
        className={`${selectedPage === "home" ? selectedStyle : "bg-dark-grey"}
            w-2 h-2 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "skills" ? selectedStyle : "bg-dark-grey"
        }
        w-2 h-2 rounded-full`}
        href="#skills"
        onClick={() => setSelectedPage("skills")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyle : "bg-dark-grey"
        }
        w-2 h-2 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      />
      <AnchorLink
        className={`${
          selectedPage === "testimonials" ? selectedStyle : "bg-dark-grey"
        }
        w-2 h-2 rounded-full`}
        href="#testimonials"
        onClick={() => setSelectedPage("testimonials")}
      />
      <AnchorLink
        className={`${
          selectedPage === "contactme" ? selectedStyle : "bg-dark-grey"
        }
        w-2 h-2 rounded-full`}
        href="#contactme"
        onClick={() => setSelectedPage("contactme")}
      />
    </div>
  );
};

export default DotGroup;
