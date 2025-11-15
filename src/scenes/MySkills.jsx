import { CgBrowser } from "react-icons/cg";
import { BiServer } from "react-icons/bi";
import { AiOutlineMobile } from "react-icons/ai";
import Divider from "../components/Divider";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-40">
      {/**Header section */}

      <motion.div
        className="md:w-1/3 mt-24 mx-auto text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="font-semibold text-4xl mb-5 text-center">
          MY <span className="text-green-500">STACK</span>
        </p>
        <div className="flex justify-center mt-3">
          <Divider width="w-1/3" />
        </div>
      </motion.div>

      {/**SKILLS */}
      <div className="md:flex md:justify-evenly mt-16 gap-28 ">
        {/**EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10 md:mb-0 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex gap-x-4 items-center">
            <p className="font-semibold text-5xl text-gray-400">
              <AiOutlineMobile />
            </p>
            <p className="text-3xl font-medium text-gray-200">
              Mobile development
            </p>
          </div>
          <p className="mt-5 text-gray-300">
            I build high-quality mobile applications using Kotlin and modern
            Jetpack libraries such as Dagger-Hilt, Retrofit, Room, and Kotlin
            Coroutines. I also develop cross-platform apps using React Native
            (Expo), delivering smooth, consistent experiences across Android and
            iOS.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10 md:mb-0 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex gap-x-4 items-center">
            <p className="font-semibold text-5xl text-gray-400">
              <CgBrowser />
            </p>
            <p className="font-medium text-3xl text-gray-200">
              Web development
            </p>
          </div>
          <p className="mt-5 text-gray-300">
            I create modern, responsive, and performance-focused web
            applications using JavaScript, TypeScript, React, Next.js,
            SvelteKit, and Tailwind CSS. My focus is clean UI/UX, scalability,
            and pixel-perfect interfaces.
          </p>
        </motion.div>
        {/**EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10 md:mb-0 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex gap-x-4 items-center">
            <p className="font-semibold text-5xl text-gray-400">
              <BiServer />
            </p>
            <p className="font-medium text-3xl text-gray-200">
              Backend development
            </p>
          </div>

          <p className="mt-5 text-gray-300">
            I build scalable backend systems using Python and Django, applying
            REST architecture to deliver secure, reliable, and high-performance
            APIs for web and mobile applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
