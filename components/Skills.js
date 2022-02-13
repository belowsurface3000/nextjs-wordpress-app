import React from 'react';

function Skills() {
  return <>
    <div className="skills" id="skills">

        <h2>Skills 💪</h2>
        <div className="skills-first-flexbox">
            <p>Time to shine. Our biggest advantage is having skills and knowledge in various professions. Therefore we are able to work independently and can deliver not only the finished product, but also the bits of pieces necessary to build it in first place: From audio recording to editing, still image and film work, to state of the art programming. Not to forget our trophies in music promotion! Please have a small glimpse into our capabilities:</p>
            <img src={require("../images/beth-skills.jpg")} alt="An olf fashioned light bulb is glowing" />
        </div>

        <div className="skills-second-flexbox">
            <div>
                <h4>Web-Dev. Frontend</h4>
                <ul>   
                    <li>HTML</li>
                    <li>CSS & SASS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
            </div>
            <div>
                <h4>Web-Dev. Backend</h4>
                <ul>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                </ul>
            </div>
            <div>
                <h4>Music Production</h4>
                <ul>
                    <li>Ableton LIVE</li>
                    <li>Adobe Audition</li>
                    <li>Fabfilter Bundle</li>
                    <li>Waves Audio</li>
                    <li>Mix- & Mastering</li>
                </ul>
            </div>
        </div>
        
    </div>
  </>;
}

export default Skills;
