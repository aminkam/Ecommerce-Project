import React from "react";

import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiMail,
} from "react-icons/fi";

const SocialFooter = () => {
  return (
    <>
      <a href="https://github.com/aminkam" target="_blank" rel="noreferrer">
        <FiGithub
          className="social-footer animation"
          size="1.5em"
          color="#2b2b2b"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/amin-kammoun-90a713220/"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin
          className="social-footer animation"
          size="1.5em"
          color="#2b2b2b"
        />
      </a>
      <a href="mailto:aminkammoun001@gmail.com">
        <FiMail
          className="social-footer animation"
          size="1.6em"
          color="#2b2b2b"
        />
      </a>
      <a
        href="https://www.instagram.com/aminkammoun/?hl=fr"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram
          className="social-footer animation"
          size="1.5em"
          color="#2b2b2b"
        />
      </a>
      <a
        href="https://www.facebook.com/amin.kammoun.7/"
        target="_blank"
        rel="noreferrer"
      >
        <FiFacebook
          className="social-footer animation"
          size="1.5em"
          color="#2b2b2b"
        />
      </a>
    </>
  );
};

export default SocialFooter;
