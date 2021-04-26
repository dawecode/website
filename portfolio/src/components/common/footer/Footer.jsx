import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
     
        <a href="https://www.linkedin.com/in/dawecm/">
          <FontAwesomeIcon
            className="footer__social-media-icon"
            icon={faLinkedin}
          />
        </a>
        <a href="https://github.com/dawecode">
          <FontAwesomeIcon
            className="footer__social-media-icon"
            icon={faGithubSquare}
          />
        </a>
        <a class="mailto" href="mailto:dawe.cm@gmail.com">
          <FontAwesomeIcon
          className="footer__social-media-icon"
          icon={faEnvelope}
          />
        </a>
      </section>
    </section>
  );
}

export default Footer;
