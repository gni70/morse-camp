import React from "react";

import "./About.css";

const About = () => (
  <div className="md-grid">
    <h1 className="md-cell md-cell--12 md-text-container">About</h1>
    <div className="md-cell md-cell--12 md-text-container">
      <p>
        Morse Camp trains people to have fluent conversations in Morse code. It
        can be used offline without installing anything and works on mobile
        phones as well as on desktop computers.
      </p>
      <p>
        Knowledge of the Morse code alphabet is assumed. If you're starting from
        scratch, check out the excellent trainer at{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://lcwo.net">
          LCWO.net
        </a>
      </p>
      <p>
        Morse Camp is under active development with a{" "}
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://forum.morse.camp/t/morse-camp-roadmap/16"
        >
          public roadmap
        </a>. Your feedback and suggestions would be much appreciated at{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://forum.morse.camp">
          forum.morse.camp
        </a>{" "}
        or by email at <a href="mailto:op@morse.camp">op@morse.camp</a>.
      </p>
    </div>
  </div>
);

export default About;
