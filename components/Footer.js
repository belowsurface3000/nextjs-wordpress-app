import React from 'react';
import Image from 'next/image';
import Link from "next/link";

function Footer() {
  return <>
    <footer id="footer">

      <Image src={require("../images/banner.JPG")} alt="The belowsurface.de banner" layout="fill" />
      
      <div className="content">
        <h1>Reached the end!</h1>
        <div className="links">
          <a href="https://github.com/belowsurface3000?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://besurelabel.de" target="_blank" rel="noreferrer">Music Label</a>
          <a href="https://soundcloud.com/belowsurface" target="_blank" rel="noreferrer">Soundcloud</a>
          <a href="https://www.youtube.com/c/BeSurelabel/featured" target="_blank" rel="noreferrer">Youtube</a>
        </div>
      </div>

      <div className="bottom-text">
        <p>(c) 2022 Below Surface Medien</p>
        <div>
          <Link href="/Impressum"><a>Impressum</a></Link>
          <p>|</p>
          <Link href="/Datenschutz"><a>Datenschutz</a></Link>
        </div>
      </div>
      
    </footer>
  </>;
}

export default Footer;
