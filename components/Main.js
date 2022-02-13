import React, { useEffect } from 'react';
import Header from "./Header";
import Navigation from "./Navigation";
import About from './About';
import Contact from './Contact';
import References from './References';
import Services from './Services';
import Skills from './Skills';
import Footer from './Footer';

function Main() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <>
    <Header />
    <Navigation />
    <main>
        <About />
        <Services />
        <Skills />
        <References />
        <Contact />
    </main>
    <Footer />
    </>;
}

export default Main;
