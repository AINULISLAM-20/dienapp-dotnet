import React from 'react'
import { LoginForm, Hero } from '../components'


export function Login() {
    const LoginData = [
        {
            componentName: "Hero",
            title: "Join DIEN to Boost Your Business",
            text: "Experience the future of convenience by watching live video streaming as skilled professionals take care of your assigned tasks, whether at the office or home.",
            buttonText: ["register as service provider", "lets find service provider"],
            renderComponent: function (index) {
                return <Hero {...this} key={index} />
            }
        }
    ]
    return (
        <React.Fragment>
            {LoginData.map((a, index) => {
                return a.renderComponent(index)
            })}
            <LoginForm />
        </React.Fragment>
    )
}
