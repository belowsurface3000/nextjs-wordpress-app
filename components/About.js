import React from 'react';

function About() {
  return <>
    <div className="about" id="about">
      <h2>About Us ✨</h2>
      <div className="about-flexbox">
        <p>Hi and welcome to the website of Below Surface Medien! We are a Bonn based media company involved in various topics including but not limited to Web-Development, Music Production & Video Editing.<br />
        On this page you can find out more about how we work, what exactly our skills are and which references we got. At last you will have the chance to contact us with your inquiry!</p>
          <img src={require("../images/jon-tyson-hi.jpg")} alt="The word Hi in a bright color" />
      </div>
    </div>
  </>;
}

export default About;
