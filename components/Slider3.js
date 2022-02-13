import React, { useState } from 'react'

function Slider3() {

    const slider = [
        {
            image: require("../images/references/music/dj_tianjin2.jpg"),
            alt: "Below Surface enjoys playing music on the Great Wall",
            link: "https://www.youtube.com/watch?v=L3q6iFbnoTE",
            text: "Link: Below Surface DJing on the Great Wall of China"
        },
        {
            image: require("../images/references/music/dj_berlin.jpg"),
            alt: "Below Surface DJing in Tresor Berlin",
            link: "https://www.youtube.com/watch?v=GF53-nEMu1Y",
            text: "Link: Below Surface in Tresor Berlin"
        },
        {
            image: require("../images/references/music/dj_beijing.jpg"),
            alt: "Below Surface during a DJ set in Lantern Club Beijing",
            link: "",
            text: "Below Surface and Florian Bo in Lantern Club Beijing"
        },
        {
            image: require("../images/references/music/dj_chengdu.jpg"),
            alt: "A shot from a gig in Chengdu",
            link: "",
            text: "Below Surface and Florian Bo in Tag Chengdu"
        },
        {
            image: require("../images/references/music/dj_chongqing.jpg"),
            alt: "Below Surface and Florian Bo DJing in Chongqing",
            link: "",
            text: "Below Surface and Florian Bo DJing in Chongqing"
        },
        {
            image: require("../images/references/music/dj_nanjing.jpg"),
            alt: "Below Surface an Florian Bo playing techno in Nanjing",
            link: "",
            text: "Below Surface an Florian Bo playing techno in Nanjing"
        },
        {
            image: require("../images/references/music/dj_shanghai.jpg"),
            alt: "Below Surface behind the decks in Shanghai",
            link: "",
            text: "Below Surface behind the decks in Shanghai"
        },
        {
            image: require("../images/references/music/dj_tianjin.jpg"),
            alt: "Absorbed playing a liveset next to the Great Wall of China",
            link: "",
            text: "Absorbed playing a liveset next to the Great Wall of China"
        },
        {
            image: require("../images/references/music/support_apple.jpg"),
            alt: "The Apple music chart, with a Be Sure release included",
            link: "https://www.beatport.com/release/9-hours-ep/2964729",
            text: "Link: Electric Rescue charted on Apple Music (Beatport link)"
        },
        {
            image: require("../images/references/music/support_hawtin.jpg"),
            alt: "Richie Hawtin supported a track by Below Surface",
            link: "https://www.beatport.com/release/waves-from-the-past/1654450",
            text: "Link: Richie Hawtin supported a track by Below Surface"
        },
        {
            image: require("../images/references/music/support_inigo.jpg"),
            alt: "Inigo Kennedy charted a track by Below Surface",
            link: "https://www.beatport.com/release/below-surface/1591854",
            text: "Link: Inigo Kennedy charted a track by Below Surface"
        },
        {
            image: require("../images/references/music/BESURE008.jpg"),
            alt: "The release artwork of a Be Sure release by Tension",
            link: "https://www.beatport.com/release/tension/1771625",
            text: "Link: BESURE008 Tension - Tension"
        },
        {
            image: require("../images/references/music/BESURE012.jpg"),
            alt: "The artwork of BESURE012 by Below Surface",
            link: "https://www.beatport.com/release/on-the-run/2196603",
            text: "Link: BESURE012, On the Run by Below Surface"
        },
        {
            image: require("../images/references/music/BESURE016.jpg"),
            alt: "The artwork of BESURE012 by Below Surface",
            link: "https://www.beatport.com/release/depths-of-sound/2447832",
            text: "Link: BESURE012, Depth of Sound by Below Surface"
        },
        
    ];
    const [increase, setIncrease] = useState(false);
    const toggleIncrease = () => {
        if (increase) {
            setIncrease(false)
        } else {
            setIncrease(true)
        }
    };
    const [current, setCurrent] = useState(0);
    const length = slider.length;
    const prevSlide = () => setCurrent((current === 0) ? length -1 : current -1);
    const nextSlide = () => setCurrent((current === length - 1) ? 0 : current +1);
    if (!Array.isArray(slider) || slider.length <= 0) return null;

    return (
        <div className={increase ? "increase-me" : ""}>
            <h4>In the Music</h4>
            <div className="image-slider-container">
                <div className="left-arrow" onClick={prevSlide}>&#10094;</div>
                <div className="right-arrow" onClick={nextSlide}>&#10095;</div>
                {
                    slider.map((slide, index) => {
                        return (
                            <div className="image-slider" key={index}>
                                <div className={(index === current) ? "slide-active" : "slide"}>
                                    {index === current && (
                                        <>
                                            <img src={slide.image} alt={slide.alt} onClick={toggleIncrease} />
                                            <a href={slide.link} target="_blank" rel="noreferrer" >{slide.text}</a>
                                        </>
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
            </div> 
        </div>
    )
}

export default Slider3
