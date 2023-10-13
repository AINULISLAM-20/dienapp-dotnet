import React from 'react'
import { Hero, Qualities, Services, TopProvider, OurProjects, ContactForm, PricingPlan, Tesstimonials } from "../components";


export function AboutUs() {
    const AboutData = [
        {
            title: "About Us",
            text: "Our four pillars—Quality, Responsibility, Accountability, Dedication—guide our daily operations, fostering lasting relationships with customers, employees, stakeholders, and the community",
            buttonText: [],
            renderComponent: function (index) {
                return <Hero {...this} key={index} />
            }
        },
        {
            title: "Our Pathway to Excellence",
            text: "Our innovative platform seamlessly connects people, allowing them to easily discover and access the highest quality services located conveniently in their area",
            bulletText: [
                {
                    title: "OUR PHILOSOPHY",
                    text: "Our four corporate pillars of principles which are Quality, Responsibility, Accountability and Dedication serves as fundamental pathways, in which we conduct our daily business operations. The outcome derived from this is enduring business relations with our customers, employees, stakeholders and by extension our community."
                },
                {
                    title: "Our Vision",
                    text: "To develop innovators to lead our brand globally. Our foundation is based on integrity and strict adherence to the highest professional standard in the industry. Our strengths are the collective capabilities of a diverse team that will enable a holistic view across all industries. We will leverage those pivotal components to identify potential growth sources, nurture them into growth drivers and establish them as next-generation Core Businesses."
                },
                {
                    title: "Our Mission",
                    text: "To create a dynamic team that expands globally, guided by the four pillars of Accountability, Quality, Responsibility and Dedication. We serve to foster a win-win situation for all our staff, customers, stakeholders and communities."
                },
                {
                    title: "CORE VALUES",
                    text: "We integrate the four principles that we abide by to achieve high business ethics in all aspects of our operations. We nurture creativity through our diverse team collaboration to pursue innovation and invention. Our customers are our focal point where nothing happens if they are not contented with our service, hence our values, policies and procedures are designed with our client’s satisfaction placed as paramount importance."
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
