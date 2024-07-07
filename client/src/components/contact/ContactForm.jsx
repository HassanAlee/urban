import { Formik, Form } from 'formik'
import FormControl from '../form/FormControl'
import * as Yup from "yup"
import Grid from '../Grid'
import { ButtonFilled } from '../Buttons'
import Heading from '../Heading'
import Text from '../Text'
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
        <Grid className={"m-6 justify-between"}>
            <section className='w-full md:w-[70%]'>
                <Heading text={"We would love to hear from you"} className="font-semibold text-3xl" />
                <Text className="font-[300] text-sm my-4" text={"I you have any query or any type of suggestion you can directly contact us!"} />
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={values => console.log(values)}>
                    {
                        formik => {
                            return <Form>
                                <Grid className={"justify-between"}>
                                    <article className="w-full md:w-[49.1%] ">
                                        <FormControl control={"input"} name="name" label="Name" />
                                    </article>
                                    <article className="w-full md:w-[49.1%] ">
                                        <FormControl control={"input"} name="email" label="Email" type="email" />
                                    </article>
                                </Grid>
                                <article className="w-full md:w-full mt-4">
                                    <FormControl control="textarea" name="message" label="Message" />
                                </article>
                                <ButtonFilled type="submit" text="send message" optClasses="mt-4" />
                            </Form>
                        }
                    }
                </Formik>
            </section>
            <div className='md:w-[25%] w-full'>
                <Heading text="visit us" className="font-normal text-lg capitalize" />
                <Text className="font-[300] text-sm" text="Islamabad, Pakistan" />
                <Text text="Phone: +920543777" className="font-[300] text-sm" />
                <Heading text="get in touch" className="font-normal text-lg mt-6 capitalize" />
                <Text text="You can also contact us on this email." className="font-[300] text-sm" />
                <Text text="Email: hassanalics72@gmail.com" className="font-[300] text-sm" />
            </div>
        </Grid>
    )
}

export default ContactForm