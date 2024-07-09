import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import FormControl from '../form/FormControl'
import { ButtonFilled } from '../Buttons'
import Grid from '../Grid'
import axios from 'axios'
const initialValues = {
    city: "",
    street: "",
    zip: ""
}
const validationSchema = Yup.object({
    city: Yup.string().required("City is required"),
    street: Yup.string().required("Street is required"),
    zip: Yup.string().required("ZIP is required")
})
const Address = ({ data, setData }) => {
    const onSubmit = (values) => {
        setData({ ...data, ...values })
        handleSignup({ ...data, ...values })
    }
    const handleSignup = async (values) => {
        const res = await axios.post('http://localhost:3000/user/register', values);
        console.log(res);
    }
    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => {
                        return <Form className='w-full mt-6'>
                            <Grid className={"justify-between mb-6"}>
                                <article className="w-full md:w-[47.5%] ">
                                    <FormControl control={"input"} name="city" label="City" type="text" />
                                </article>
                                <article className="w-full md:w-[47.5%]">
                                    <FormControl control={"input"} name="zip" label="ZIP Code" type="text" />
                                </article>
                            </Grid>
                            <FormControl control="input" type="text" name="street" id="street" label="Home Address" />
                            <div className='text-end mt-6'>
                                <ButtonFilled type="submit" text={"Register"} />
                            </div>
                        </Form>
                    }
                }
            </Formik>
        </>
    )
}

export default Address