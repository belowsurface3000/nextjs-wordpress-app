import React from 'react';

function Footer() {
  return <>
    <footer id="footer">

        <picture>
          <source srcSet={require("../images/bannerSmall.jpg")} media="(max-width: 850px)" />
          <source srcSet={require("../images/bannerMid.jpg")} media="(max-width: 1600px)" />
          <source srcSet={require("../images/bannerHigh.jpg")} />
          <img src={require("../images/banner.JPG")} alt="The belowsurface.de banner" />
        </picture>
      
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
          <a to="impressum">Impressum</a>
          <p>|</p>
          <a to="datenschutz">Datenschutz</a>
        </div>
      </div>
      
    </footer>
  </>;
}

export default Footer;
