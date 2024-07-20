import { Field, ErrorMessage } from "formik"
import Error from "../Error"
const Select = ({ label, name, options, ...rest }) => {
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name} {...rest}>
                {
                    options.map((_, i) => <option className="w-full p-2 border" key={i} value={_}>{_}</option>)
                }
            </Field>
            <ErrorMessage name={name} component={Error} />
        </div>
    )
}

export default Select