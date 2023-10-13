import React from 'react'
import { Hero , ServiceDetail  } from '../components'


export function Services() {
    const ServiceData = [
        {
            componentName: "Hero",
            title: "Join DIEN to Boost Your Business",
            text: "Experience the future of convenience by watching live video streaming as skilled professionals take care of your assigned tasks, whether at the office or home.",
            buttonText: ["register as service provider", "lets find service provider"],
            renderComponent: function (index) {
                return <Hero {...this} key={index} />
            }
        },
    ]
    return (
        <React.Fragment>
            {ServiceData.map((a, index) => {
                return a.renderComponent(index)
            })}
            
            <ServiceDetail/>
        </React.Fragment>
    );
}
