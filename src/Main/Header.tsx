import { FiMail } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const Header = () => {
  return (
    <div id="header" className="flex flex-col items-center gap-2">
      <h1 className="text-light text-5xl">Thomas Amighi</h1>
      <h2 className="text-light text-3xl">Full Stack Developer</h2>
      <div id="links" className="flex flex-col content-center">
        <div className="flex justify-center gap-4">
          <div className="flex gap-1 items-center">
            <FiMail />-
            <a
              href="mailto:thomas.amighi@hotmail.com"
              className="text-blue-600"
            >
              thomas.amighi@hotmail.com
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <FiLinkedin />-
            <a
              href="https://www.linkedin.com/in/thomas-amighi"
              target="_blank"
              className="text-blue-600"
            >
              linkedin.com/in/thomas-amighi
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <div className="flex gap-1 items-center">
            <FiGithub />-
            <a
              href="https://github.com/tamighi"
              target="_blank"
              className="text-blue-600"
            >
              github.com/tamighi
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <FiExternalLink />-
            <a
              href="https://tamighi.github.io/portfolio"
              target="_blank"
              className="text-blue-600"
            >
              tamighi.github.io/portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
