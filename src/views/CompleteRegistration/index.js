import React from 'react'
import CompleteRegistration from '../../components/CompleteRegistration'
import ActionButton from '../../components/ActionButton'

export default function CompleteRegistrationView({history}) {
    const handleRegister =()=>{
        history.push('/')

    }

    return (
        <section id="complete-registration">
           <CompleteRegistration/>

           <ActionButton text="Complete Registration" onClick={()=>handleRegister()}/>
        </section>
    )
}
