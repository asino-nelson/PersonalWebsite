import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start mt-4 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/nelson-asino-7a42a5239/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={24}/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://github.com/asino-nelson"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={24}/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/humble_asino"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter size={24}/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/humble_asino/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={24}/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
