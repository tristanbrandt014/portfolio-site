import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import React from "react";

const Social: React.FC = () => {
  return (
    <>
      <a
        className="text-[#bbb] transition-all hover:text-[#eee]"
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/tristandev/"
      >
        linkedin
      </a>
      <span className="text-[#bbb]">|</span>
      <a
        className="text-[#bbb] transition-all hover:text-[#eee]"
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/tristanbrandt014/"
      >
        instagram
      </a>
    </>
  );

  return (
    <>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/tristandev/"
      >
        <SlSocialLinkedin color="#ccc" size={24} />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/tristanbrandt014/"
      >
        <SlSocialInstagram color="#ccc" size={20} />
      </a>
    </>
  );
};

export default Social;
