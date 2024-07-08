import React from 'react'
import Container from '../../components/auth/Container'
import Steps from '../../components/auth/Steps'
import AuthInfo from '../../components/auth/AuthInfo'
import Profile from '../../components/auth/Profile'
import Address from '../../components/auth/Address'
const Register = () => {
    return (
        <Container>
            <Steps />
            {/* <AuthInfo /> */}
            {/* <Profile /> */}
            <Address />
        </Container>
    )
}

export default Register