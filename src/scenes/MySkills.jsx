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
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-semibold text-5xl text-gray-400">
                <AiOutlineMobile />
              </p>
              <p className="text-3xl font-medium mt-3 text-gray-200">
                Mobile development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-green-500 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-gray-300">
            I design and build user-friendly Mobile applications using Kotlin
            and Jetpack libraries such as Dagger-Hilt, Retrofit (REST), Room
            Database, and Kotlin Coroutines. Additionally, I develop cross-platform mobile applications using
            React Native Expo, enabling seamless experiences across both Android and
            iOS platforms.
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
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-semibold text-5xl text-gray-400">
                <CgBrowser />
              </p>
              <p className="font-medium text-3xl mt-3 text-gray-200">
                Web development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-gray-300">
            I have experience in designing appealing website UIs using
            JavaScript, TypeScript, React, Next.js, Svelte Kit, and Tailwind
            CSS, creating modern and responsive web applications with a focus on
            performance and user experience
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
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-semibold text-5xl text-gray-400">
                <BiServer />
              </p>
              <p className="font-medium text-3xl mt-3 text-gray-200">
                Backend development
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-orange-700 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-gray-300">
            I create server-side applications using Python and Django,
            incorporating REST web services by building robust and scalable
            APIs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
