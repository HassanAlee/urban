import { Formik, Form } from 'formik'
import FormControl from '../form/FormControl'
import * as Yup from "yup"
import Grid from '../Grid'
import { ButtonFilled } from '../Buttons'
import Heading from '../Heading'
const ContactForm = () => {
    const initialValues = {
        name: "",
        email: "",
        message: ""
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email("Invalid email format").required('Email is required'),
        message: Yup.string().required('Message is required')
    })
    return (
        <>
            <Heading text={"We would love to hear from you"} />
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values => console.log(values)}>
                {
                    formik => {
                        return <Form className="m-6">
                            <Grid className={"justify-between"}>
                                <FormControl control={"input"} name="name" label="Name" />
                                <FormControl control={"input"} name="email" label="Email" type="email" />
                            </Grid>
                            <FormControl control="textarea" name="message" label="Message" />
                            <ButtonFilled type="submit" text="send message" optClasses="mt-4" />
                        </Form>
                    }
                }
            </Formik></>
    )
}

export default ContactForm