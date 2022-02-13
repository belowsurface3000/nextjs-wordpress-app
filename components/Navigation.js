import React, { useEffect, useState } from 'react';
import Link from "next/link";

function OutOfPageFlow() {

    // Navigation button click and navigation visibility effect
    const [navigation, setNavigation] = useState(false);
    const toggleNavigation = () => {
        if (navigation) {
            setNavigation(false);
        } else {
            setNavigation(true);
        }
    };
    // Navigation button scroll effect
    const [scrollUp, setScrollUp] = useState(true);
    const [navigationHidden, setNavigationHidden] = useState(false);
    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
        window.addEventListener("scroll", () => {
            let currentScrollPos = window.pageYOffset;
            if (currentScrollPos < (window.innerHeight / 2)) {
                setScrollUp(true);
            } else if (prevScrollPos > currentScrollPos) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
            prevScrollPos = currentScrollPos;
        });
    // Navigation hidden on small screens
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 1500) {
                setNavigationHidden(true);
            } else {
                setNavigationHidden(false)
            }
        });
        if (window.innerWidth <= 1500) {
            setNavigationHidden(true);
        }
    });
        
    return <>
        {/* Navigation trigger button */}
        <div className={(scrollUp) ? "navigation-trigger" : "navigation-trigger navigation-button-hidden"} onClick={toggleNavigation}>
            <div className={(navigation) ? "nav-icon open" : "nav-icon"}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        {/* NAVIGATION - if nav is hidden and navigation is false */}
        <nav className={(navigationHidden && !navigation) ? "navigation navigation-hidden" : "navigation"}>
            <div>
                <Link href="#top"><a onClick={toggleNavigation}>Top</a></Link>
                <Link href="#about"><a onClick={toggleNavigation}>About</a></Link>
                <Link href="#services"><a onClick={toggleNavigation}>Services</a></Link>
                <Link href="#skills"><a onClick={toggleNavigation}>Skills</a></Link>
                <Link href="#references"><a onClick={toggleNavigation}>References</a></Link>
                <Link href="#contact"><a onClick={toggleNavigation}>Contact</a></Link>
                <Link href="/tutorials">Tutorials</Link>
            </div>
            <div>
                <p>Navigation</p>
            </div>
        </nav>
    </>;
}

export default OutOfPageFlow;
