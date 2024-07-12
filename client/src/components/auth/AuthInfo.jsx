import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from '../form/FormControl'
import { ButtonFilled } from '../Buttons'
import toast from 'react-hot-toast'
const initialValues = {
    email: "",
    password: "",
    confirmPassword: ""
}
const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Confirm password is required")
})
const AuthInfo = ({ setStep, setData, data }) => {
    const onSubmit = (values) => {
        if (values.password !== values.confirmPassword) {
            toast.error("Password do not match");
            return;
        }
        setData({ ...data, ...values })
        setStep(2)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form className='w-full'>
                        <FormControl control="input" type="email" name="email" id="email" label="Email" />
                        <article className='my-6'>
                            <FormControl control="input" name="password" id="password" label="password" type="password" />
                        </article>
                        <FormControl control="input" name="confirmPassword" id="confirmPassword" label="Confirm Password" type="password" />
                        <div className='text-end mt-6'>
                            <ButtonFilled text={"next"} type="submit" />
                        </div>
                    </Form>
                }
            }
        </Formik>
    )
}

export default AuthInfo