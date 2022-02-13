import React from 'react';
import Image from "next/image";

function Header() {
  return <>
    <header id="top">

        <Image src={require("../images/banner.JPG")} alt="The belowsurface.de banner" layout="fill" />

        <div className="banner">
            <h1>Below Surface Medien</h1>
            <div>
              <h4>Web Development</h4>
              <h4>Music Production</h4>
              <h4>Video Editing</h4>
            </div>
        </div>

    </header>
  </>;
}

export default Header;
