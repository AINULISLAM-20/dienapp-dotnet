import React from "react";
import { Hero, Qualities, Services, TopProvider, OurProjects, ContactForm, PricingPlan, Tesstimonials  } from "../components";

import service01 from '../images/service-img1.jpg'
import service02 from '../images/service-img2.jpg'
import service03 from '../images/service-img3.jpg'
import service04 from '../images/service-img4.jpg'


export function Home() {
    const HomeData = [
        {
            componentName: "Hero",
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
        {
            title: "Our Top Rated Cleaning Services For You",
            list: [
                {
                    imgSrc: service01,
                    title: "Air Duct Cleaning",
                    text: "Breathe Easy with Fresh, Clean Air – Air Duct Cleaning for Healthier Living."
                },
                {
                    imgSrc: service02,
                    title: "Lawn Service",
                    text: "Your Dream Lawn, Our Passion – Transforming Yards into Lush Paradise."
                },
                {
                    imgSrc: service03,
                    title: "Landscaping Service",
                    text: "Crafting Beauty, Nurturing Serenity – Landscaping Services That Exceed Expectations."
                },
                {
                    imgSrc: service04,
                    title: "Pest Control Service",
                    text: "Protecting Your Peace of Mind – Pest Control Services You Can Trust."
                },
                {
                    imgSrc: service01,
                    title: "Gutter Cleaning",
                    text: "Clear Skies, Clean Gutters – Keeping Your Home Safe and Water Flowing Smoothly."
                }
            ],
            renderComponent: function (index) {
                return <Services {...this} key={index} />
            }
        },
        {
            title: "Top Providers",
            list: [
                {
                    imgSrc: service01,
                    title: "Air Duct Cleaning",
                    text: "Breathe Easy with Fresh, Clean Air – Air Duct Cleaning for Healthier Living."
                },
                {
                    imgSrc: service02,
                    title: "Lawn Service",
                    text: "Your Dream Lawn, Our Passion – Transforming Yards into Lush Paradise."
                },
                {
                    title: "Landscaping Service",
                    text: "Crafting Beauty, Nurturing Serenity – Landscaping Services That Exceed Expectations."
                },
                {
                    title: "Pest Control Service",
                    text: "Protecting Your Peace of Mind – Pest Control Services You Can Trust."
                },
                {
                    title: "Gutter Cleaning",
                    text: "Clear Skies, Clean Gutters – Keeping Your Home Safe and Water Flowing Smoothly."
                }
            ],
            renderComponent: function (index) {
                return <Services {...this} key={index} />
            }
        },
    ]
    return (
        <React.Fragment>
            {HomeData.map((a, index) => {
                return a.renderComponent(index)
            })}
            <TopProvider />
            <OurProjects />
            <ContactForm />
            <PricingPlan />
            <Tesstimonials />
        </React.Fragment>
    );
}
