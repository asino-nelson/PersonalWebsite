import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
         hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
     // onClick={() => setIsMenuToggled(!isMenuToggled)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const navBarBackground = isTopOfPage
    ? ""
    : "bg-green-800 transition duration-500";

  return (
    <nav className={`${navBarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="text-3xl font-light">Nelson</h4>

        {/**DESKTOP NAV */}
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 text-sm">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="ContactMe"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <motion.button
            alt="menu"
            className="rounded-full bg-green-500 p-3 hover:bg-green-400 transition duration-100"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FiMenu />
          </motion.button>
        )}

        {/* MOILE MENU POUP */}
        {!isAboveSmallScreen && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-cyan-950 w-[300px]">
            <div className="flex justify-end p-12">
              {/**Close btn */}
              <motion.button
                alt="menu"
                className="rounded-full bg-green-500 p-3 hover:bg-green-400 transition duration-100"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <AiOutlineClose />
              </motion.button>
            </div>
            <div className="flex flex-col gap-10 ml-[33%] text-xl text-gray-300">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="ContactMe"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
