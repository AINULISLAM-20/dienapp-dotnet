import React from 'react'
import { Hero, Qualities, Services, TopProvider, OurProjects, ContactForm, PricingPlan, Tesstimonials } from "../components";


export function AboutUs() {
    const AboutData = [
        {
            title: "Join DIEN to Boost Your Business",
            text: "Experience the future of convenience by watching live video streaming as skilled professionals take care of your assigned tasks, whether at the office or home.",
            buttonText: ["register as service provider", "lets find service provider"],
            renderComponent: function (index) {
                return <Hero {...this} key={index} />
            }
        },
        {
            title: "We Connect People to Find Best Services Nearest to You",
            text: "Our innovative platform seamlessly connects people, allowing them to easily discover and access the highest quality services located conveniently in their area",
            bulletText: [
                {
                    title: "Your peace of mind is our priority",
                    text: "We are committed to ensuring the security of your essential services. Experience the assurance of a job well done."
                },
                {
                    title: "Real-Time Task Monitoring",
                    text: "Confidently monitor your tasks in real-time through live streaming. Upon completion, access recorded videos as irrefutable proof."
                },
                {
                    title: "Manage Your Finances and Track Your History",
                    text: "Monitor spending easily within the app to stay on top of your finances. View individual job costs for accurate expense tracking and financial clarity."
                },
                {
                    title: "Easy Service Scheduling with Our App",
                    text: "Easily book services with a few taps for effortless scheduling. Adjust service times as needed with our user-friendly app, ensuring ultimate convenience."
                }
            ],
            renderComponent: function (index) {
                return <Qualities {...this} key={index} />
            }
        },
    ]
    return (
        <React.Fragment>
            {AboutData.map((a, index) => {
                return a.renderComponent(index)
            })}
        </React.Fragment>
    )
}
