import { Field, ErrorMessage } from "formik"
import Error from "../Error"
const Input = ({ name, label, ...rest }) => {
    return (
        <>
            <>
                <label htmlFor={name} className="capitalize">{label}</label> <br />
                <Field name={name} id={name} {...rest} className="w-full p-2 border" />
                <ErrorMessage name={name} component={Error} />
            </>
        </>
    )
}

export default Input