import React from "react";
import { Hero, Qualities, Services, TopProvider, OurProjects, ContactForm, PricingPlan, Tesstimonials } from "../components";

export function Home() {
    return (
        <React.Fragment>
            <Hero />
            <Qualities />
            <Services />
            <TopProvider />
            <OurProjects />
            <ContactForm />
            <PricingPlan />
            <Tesstimonials />
        </React.Fragment>
    );
}
