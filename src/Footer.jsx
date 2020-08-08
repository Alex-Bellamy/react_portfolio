import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="ui container">
        <a href="https://github.com/Alex-Bellamy" id="github">
          <button className="ui rounded github button">
            <i class="github icon"></i>
            Delve deeper
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/alex-bellamy-0237441b4/"
          id="linkedin"
        >
          <button className="ui rounded linkin button">
            <i class="linkedin icon"></i>
            Hit me up
          </button>
        </a>

        <p id="footer">React, thank you.</p>
      </div>
    </footer>
  );
};

export default Footer;