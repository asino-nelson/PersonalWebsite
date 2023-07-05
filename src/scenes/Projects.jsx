import Divider from "../components/Divider";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full p-10 opacity-0 hover:opacity-90 transition duration-700 bg-grey
     z-30 flex flex-col justify-center items-center text-center text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl">{title}</p>
        <p className="mt-7">{subtitle}</p>
        <a
          className="hover:opacity-80 transition duration-500 pt-10"
          href="https://github.com/asino-nelson"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={24}/>
        </a>
      </div>

      <img
        className="h-full w-full p-1"
        src={`/image/${projectTitle}.jpg`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pb-48 pt-48 ">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-semibold text-4xl">
            <span className="text-green-500">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-3">
            <Divider width="w-1/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          Here are some of projects i've worked on. Get your project on this
          awesome list !!
        </p>
      </motion.div>

      {/**Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 "
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/**Row 1 */}
          <Project
            title="La Plato"
            subtitle="This is a recipe mobile application"
          />
          <Project
            title="Vatise Enterprise"
            subtitle="This is an architecture web application"
          />
          <Project
            title="Speed Test"
            subtitle="This is a mobile application purpose to test wifi speed"
          />
          {/**Row 2 */}
          <Project
            title="Air bnb"
            subtitle="This is a clone of the famous airbnb web application"
          />
          <Project
            title="Notes App"
            subtitle="A mobile application that enables one to create, edit and save notes"
          />
          <Project
            title="Netflix clone"
            subtitle="This is a clone of the Netflix application"
          />
          {/**Row 3 */}
          <Project
            title="Deliveroo Clone"
            subtitle="This is a react-native deliveroo clone mobile app"
          />
          <Project
            title="Movie App"
            subtitle="This is a movie website displaying latest movies"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
