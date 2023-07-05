import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:items-center md:justify-around md:h-full py-10"
    >
      {/** IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis 3/5 z-10 mt-16 py-10">
        {isAboveMediumScreen ? (
          <div
            className="relative z-0 before:absolute before:-top-8 before:-left-10 before:rounded-full before:w-full
         before:max-w-[400px] before:h-full before:border-2 before:border-green-500 before:z-[-1]"
          >
            <img
              src="/image/me.jpg"
              className="rounded-full"
              alt="profile-avatar"
            />
          </div>
        ) : (
          <div>
            <img
              src="/image/me.jpg"
              className="rounded-full hover:filter hover:saturate-200 transition duration-500 z-10 w-full 
               max-w-[400px] md:max-w-[600px]"
              alt="profile-avatar"
            />
          </div>
        )}
      </div>

      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          className=" mt-10 flex flex-col justify-start items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-6xl z-10 text-center md:text-start">
            Nelson {""}
            <span className="xs:relative xs:font-semibold z-20 xs:text-green-500 ">
              Asino
            </span>
          </p>
          <p className="mt-3  text-2xl text-green-500 ">Android Developer</p>
          <p className="mt-5  text-base mb-7 ">
            I ama a software developer passionate about android and frontend web
            development always transforming ideas and designs into concrete real world
            solutions.
          </p>
        </motion.div>

        {/*CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <AnchorLink
            className="py-3 bg-green-500 px-7 rounded-sm text-deep-blue font-semibold
             hover:bg-green-400 hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contactme")}
            href="#contactme"
          >
            Contact me
          </AnchorLink>
          <AnchorLink
            className=" bg-green-500 py-0.5 pr-0.5 rounded-r-sm"
            onClick={() => setSelectedPage("contactme")}
            href="#projects"
          >
            <div className="bg-deep-blue hover:text-green-500 transition duratio-500 w-full h-full flex items-center justify-center px-10">
              My Portfolio
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
