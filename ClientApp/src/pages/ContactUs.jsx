import React from 'react'
import { Hero, GetinTouch } from '../components'

export function ContactUs() {
    const ContactData = [
        {
            componentName: "Hero",
            title: "Contact Us",
            text: "Do you have a comment, compliment, or complaint, or do you want to schedule an appointment? To contact us by phone, please call: +1 954-448-3716. Open 7 Days a week",
            buttonText: [],
            renderComponent: function (index) {
                return <Hero {...this} key={index} />
            }
        },]
        return (
            <React.Fragment>
                {ContactData.map((a, index) => {
                    return a.renderComponent(index)
                })}
               <GetinTouch/>
            </React.Fragment>
        );
}
