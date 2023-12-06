import React from "react";
// import { Link } from "react-router-dom";

import "./style.css";

function Footer() {
  return (
    <footer>
      <p>A directory of U.S. businesses organized with tags.</p>
      <p>
        In the United States, "Yellow Pages" and the "Walking Fingers" logos
        were never registered as trademarks and are freely used by several
        publishers.
        <sup>
          <a href="#cite-1">1</a>
        </sup>
      </p>
      <p id="cite-1">
        1. <cite>BellSouth Corp. v. DataNational Corp.</cite>, 60 F.3d 1565,
        1569 (Fed. Cir. 1995).
      </p>
    </footer>
  );
}

export default Footer;
