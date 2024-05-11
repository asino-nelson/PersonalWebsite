import Divider from "../components/Divider";
import { motion } from "framer-motion";

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

const Project = ({ title, subtitle, github }) => {
  const overlayStyles = `absolute h-full w-full md:p-10 p-5 opacity-0 hover:opacity-80 transition duration-700 bg-grey
     z-30 flex flex-col justify-center items-center text-center text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl">{title}</p>
        <p className="mt-7">{subtitle}</p>
        <a
          className="hover:bg-deep-blue/90  mt-5 rounded-md font-bold hover:border-transparent border-deep-blue/90 border-2 text-green-500 transition duratio-500 text-center md:px-10 px-8 md:py-3 py-2 cursor-pointer"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          VIEW DETAILS
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
    <section id="projects" className="py-48 ">
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
          className="sm:grid sm:grid-cols-2 md:grid-cols-3 "
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/**Row 1 */}
          
          <Project
            title="Vatise Enterprise"
            subtitle="This is a construction company web application aimed at directly linking customers to the engineers"
            github={"https://vatiseenterprise.co.ke"}
          />
          <Project
            title="Kuku Sama"
            subtitle="This is a web application for a local restaurant"
            github={"https://kukusama.netlify.app"}
          />
          <Project
            title="Farm Connect"
            subtitle="A mobile application that enables one to create, edit and save notes"
            github={"https://connectfarm.netlify.app"}
          />
         
          {/**Row 2 */}
          <Project
            title="La Plato"
            subtitle="This is a recipe mobile application that showcases different meals and their recipes from a remote API."
            github={"https://github.com/asino-nelson/La-Plato"}
          />
           <Project
            title="Speed Test"
            subtitle="This is a mobile application purpose to test wifi speed"
            github={"https://github.com/asino-nelson/Speedometer"}
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
