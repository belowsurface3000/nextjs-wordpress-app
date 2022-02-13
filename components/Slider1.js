import React, { useState } from 'react'

function Slider1() {

    const slider = [
        {   image: require("../images/references/web/besure1.jpg"), 
            alt: "Be Sure website screenshot",
            link: "https://besurelabel.de",
            text: "Be Sure Label Website"
        },
        {   image: require("../images/references/web/besure2.jpg"),
            alt: "Be Sure website screenshot",
            link: "https://besurelabel.de",
            text: "Be Sure Label Website"
        },
        {   image: require("../images/references/web/besure3.jpg"),
            alt: "Be Sure website screenshot",
            link: "https://besurelabel.de",
            text: "Be Sure Label Website"
        },
        {   image: require("../images/references/web/gambia1.jpg"),
            alt: "Gambia-Hilfe website screenshot",
            link: "https://gambia-hilfe.de",
            text: "Gambia-Hilfe e.V. Website"
        },
        {   image: require("../images/references/web/gambia2.jpg"),
            alt: "Gambia-Hilfe website screenshot",
            link: "https://gambia-hilfe.de",
            text: "Gambia-Hilfe e.V. Website"
        },
        {   image: require("../images/references/web/gambia3.jpg"),
            alt: "Gambia-Hilfe website screenshot",
            link: "https://gambia-hilfe.de",
            text: "Gambia-Hilfe e.V. Website"
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
            <h4>In the Web</h4>
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

export default Slider1
