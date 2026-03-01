import React from "react";
import Navbar from "@/components/Navbar";
import OurServicesSection from "@/components/sections/OurServicesSection";
import { useLocation } from "react-router-dom";

export default function ServiciiPage() {
    const location = useLocation();

    React.useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    return (
        <>
            <Navbar />
            <main className="pt-24 md:pt-32 bg-[#FAF9F7]">
                <OurServicesSection />
            </main>
        </>
    );
}