import { Formik, Form } from 'formik'
import FormControl from '../form/FormControl'
const ContactForm = () => {
    return (
        <Formik>
            {
                formik => {
                    <Form>
                        <FormControl control={"input"} />
                    </Form>
                }
            }
        </Formik>
    )
}

export default ContactForm