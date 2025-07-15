import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import FeaturesSection from "../components/FeaturesSection";
import NavigationCards from "../components/NavigationCards";
import StrategicAlignment from "../components/StrategicAlignment";
import CandidateSlider from "../components/CandidateSlider";
import ScrollToTop from "../components/ScrollToTop";

const HomePage = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <HeroSection />
                <FeaturesSection />
                <NavigationCards />
                <CandidateSlider />
                <StrategicAlignment />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default HomePage;
