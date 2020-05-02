import React from 'react'
import OnboardingSwipableViews from '../../components/OnboardingSwipableViews'
import ActionButton from '../../components/ActionButton'

export default function OnboardingView({history}) {

    const handleGoggleLogin =()=>{
        history.push('/home')

    }
    return (
        <section id="onboarding">
            <OnboardingSwipableViews/>

           <ActionButton text="Login with Google" onClick={()=>handleGoggleLogin()}/>
        </section>
    )
}
