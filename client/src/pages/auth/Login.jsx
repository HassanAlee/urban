import React from 'react'
import Container from '../../components/auth/Container'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from '../../components/form/FormControl'
import { ButtonFilled } from '../../components/Buttons'
import { useAuthContext } from '../../context/AuthContext'
const initialState = {
    email: "",
    password: ""
}
const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required")
})
const Login = () => {
    const { loginUser } = useAuthContext()
    const onSubmit = (values) => {
        loginUser(values)
    }
    return (
        <Container>
            <h1 className='text-center font-semibold mb-4 text-3xl'>Welcome back to Urban.</h1>
            <Formik initialValues={initialState} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => {
                        return (
                            <>
                                <Form>
                                    <FormControl control="input" type="email" name="email" id="email" label="Email" />
                                    <article className='my-6'>
                                        <FormControl control="input" name="password" id="password" label="password" type="password" />
                                    </article>
                                    <div className='text-center mt-6'>
                                        <ButtonFilled text={"Login"} type="submit" />
                                    </div>
                                </Form>
                            </>
                        )
                    }
                }
            </Formik>
        </Container>
    )
}

export default Login