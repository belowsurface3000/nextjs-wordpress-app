import React, { useState } from 'react'

function Slider2() {

    const slider = [
        {
            image: require("../images/references/video/film_besure3.jpg"),
            alt: "Be Sure film screenshot",
            link: "https://www.youtube.com/watch?v=OHDyDXFTe1M",
            text: "Link: Be Sure - a film by Below Surface"
        },
        {
            image: require("../images/references/video/film_besure.jpg"),
            alt: "Be Sure film screenshot",
            link: "https://www.youtube.com/watch?v=OHDyDXFTe1M",
            text: "Link: Be Sure - a film by Below Surface"
        },
        {
            image: require("../images/references/video/film_besure2.jpg"),
            alt: "Be Sure film screenshot",
            link: "https://www.youtube.com/watch?v=OHDyDXFTe1M",
            text: "Link: Be Sure - a film by Below Surface"
        },
        {
            image: require("../images/references/video/film_shadow.jpg"),
            alt: "Shadowtravelink film screenshot",
            link: "https://www.youtube.com/watch?v=aYvRN6d_t4U",
            text: "Shadowtraveling - a film by Below Surface"
        },
        {
            image: require("../images/references/video/film_tresor.jpg"),
            alt: "Absorbed liveset in Tresor Berlin screenshot - full audio and video recording",
            link: "https://www.youtube.com/watch?v=PwzkRUTl0fU",
            text: "Link: Absorbed LIVE @ Tresor Berlin (Video)"
        }      
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
            <h4>In the Video</h4>
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
                                            <a href={slide.link} target="_blank" rel="noreferrer">{slide.text}</a>
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

export default Slider2
