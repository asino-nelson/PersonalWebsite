import Divider from "../components/Divider";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonialStyles = `mx-auto max-w-[350px] h-[350px]  text-center`;

  return (
    <section id="testimonials" className="pb-10 pt-20">
      {/**Heading */}
      <motion.div
        className=" text-center flex flex-col justify-center items-center py-10 md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-semibold text-4xl text-center">
            <span className="text-green-500">TESTIMONIALS</span>
          </p>
          <div className="flex justify-center mt-3">
            <Divider width="w-1/2" />
          </div>
        </div>
        <p className="mt-10 mb-10">Read what others have to say</p>
      </motion.div>

      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`${testimonialStyles}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="bg-white/10 p-8 rounded-xl flex flex-col justify-center items-center ">
            <img
              src="/image/person1.jpg"
              className="rounded-full h-20"
              alt="person1"
            />
            <p className="uppercase text-opacity-10 mt-2">Karlmax Okoth</p>
            <p className="mt-1 text-sm text-slate-500">
              Android developer - Moja
            </p>
            <p className="mt-1 text-gray-300">
              He is an approved and skilled android developer having been
              colleagues at Dropy.Ltd
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`${testimonialStyles}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="bg-white/10 p-8 rounded-xl mx-auto flex flex-col justify-center items-center ">
            <img
              src="/image/person3.jpg"
              className="rounded-full h-20"
              alt="person4"
            />
            <p className="uppercase text-opacity-10 mt-2">Veronica Ndemo</p>
            <p className="mt-1 text-sm text-slate-500">
              Web developer - Afrikanest
            </p>
            <p className="mt-1 text-gray-300">
              He is a talented software developer with the ability to bring ideas and designs
              into life through code.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={`${testimonialStyles}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="bg-white/10 p-8 rounded-xl mx-auto flex flex-col justify-center items-center">
            <img
              src="/image/person2.jpg"
              className="rounded-full h-20"
              alt="person2"
            />
            <p className="uppercase text-opacity-10 mt-2">Claudius Mango</p>
            <p className="mt-1 text-sm text-slate-500">
              Android developer - Moja
            </p>
            <p className="mt-1 text-gray-300 ">
              Nelson is a creative developer with a fast-learning ability and a core contributer in a team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
