import React, { useState } from 'react'
import Container from '../../components/auth/Container'
import Steps from '../../components/auth/Steps'
import AuthInfo from '../../components/auth/AuthInfo'
import Profile from '../../components/auth/Profile'
import Address from '../../components/auth/Address'
const Register = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        email: "",
        password: "",
        image: "",
        name: "",
        phone: "",
        city: "",
        zip: "",
        street: ""
    })
    return (
        <Container>
            <Steps step={step} />
            {step == 1 && <AuthInfo setStep={setStep} setData={setData} data={data} />}
            {step == 2 && <Profile setStep={setStep} setData={setData} data={data} />}
            {step == 3 && <Address setStep={setStep} setData={setData} data={data} />}
        </Container>
    )
}

export default Register