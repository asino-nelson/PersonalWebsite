import Divider from "../components/Divider";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import SocialMediaIcons from "../components/SocialMediaIcons";

const ContactMe = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactme" className="py-40 ">
      <motion.div
        className="flex justify-center w-full"
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
            <span className="text-green-500">LET'S GET</span> IN TOUCH
          </p>
          <div className="flex md:justify-end my-5">
            <Divider width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/**FORM */}
      <div className="md:flex md:justify-between text-sm text-black gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex flex-col justify-center items-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="p-20 rounded-2xl bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg
           flex flex-col justify-around text-base items-center h-[380px]">
            <div className="font-medium text-green-200">
              <div className="flex mt-1">
                <CiPhone />
                <p className="mx-4">+254 715 729 081</p>
              </div>

              <div className="flex mt-5">
                <CiMail />
                <p className="mx-4 ">asinonelson276@gmail.com</p>
              </div>

              <div className="flex mt-5">
                <CiLocationOn />
                <p className="mx-4">Nairobi, Kenya</p>
              </div>
            </div>
            <div className="mt-7 text-white">
              <SocialMediaIcons />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            action="https://formsubmit.co/dcfea311c3fef57fd57c9f40a8b6e90b"
            onSubmit={onSubmit}
            target="_blank"
            method="POST"
          >
            <input
              className="w-full bg-green-100 placeholder-black placeholder-opacity-40 p-3 border-none rounded focus:outline-none"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Maximum length is 50 characters."}
              </p>
            )}

            <input
              className="w-full bg-green-100 placeholder-black placeholder-opacity-40 p-3 mt-5 border-none rounded focus:outline-none"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Inalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-green-100 opacity-70 placeholder-black placeholder-opacity-40 p-3 mt-5 border-none rounded focus:outline-none"
              type="text"
              placeholder="Message"
              rows="7"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Maximum is 2000 characters."}
              </p>
            )}

            <motion.button
              type="submit"
              className="w-full mt-5 py-3 text-deep-blue font-semibold bg-green-600 rounded
               hover:bg-green-500 transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => (form.target = "_blank")}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
