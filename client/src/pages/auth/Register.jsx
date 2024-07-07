import React from 'react'
import Container from '../../components/auth/Container'
import Steps from '../../components/auth/Steps'
import AuthInfo from '../../components/auth/AuthInfo'
const Register = () => {
    return (
        <Container>
            <Steps />
            <AuthInfo />
        </Container>
    )
}

export default Register