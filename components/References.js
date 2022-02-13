import React from 'react';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';

function References() {
    return <>
        <div className="references" id="references">
            <h2>References 🪗</h2>
            <p>Fully functional websites, top performing tracks on Beatport, gigs in amazing locations and one hour experimental films. Here you can have a look into it and follow the links to explore them in full effect! By the way: Just click on a image slider to increase its size!</p>
            <div className="sliders-container">
                <Slider1 />
                <Slider2 />
                <Slider3 />
            </div>
            <div className="socials">
                <a href="https://www.youtube.com/channel/UCB0jjmkPvZ3r9NYJ7HCtpxw" target="_blank" rel="noreferrer"><img src={require("../images/icons/yt.png")} alt="Youtube Logo" /></a>
                <a href="https://open.spotify.com/artist/6tcSqEAmHTLmrztjM0dQl2" target="_blank" rel="noreferrer"><img src={require("../images/icons/sf.png")} alt="Spotify Logo" /></a>
                <a href="https://soundcloud.com/besurelabel" target="_blank" rel="noreferrer"><img src={require("../images/icons/sc.png")} alt="Soundcloud Logo" /></a>
                <a href="https://www.beatport.com/label/be-sure/47385" target="_blank" rel="noreferrer"><img src={require("../images/icons/bp.png")} alt="Beatport Logo" /></a>
            </div>
        </div>
    </>;
}

export default References;
