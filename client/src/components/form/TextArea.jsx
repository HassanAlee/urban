import React from 'react'
import { Field, ErrorMessage } from 'formik'
import Error from '../Error'
const TextArea = ({ name, label, ...rest }) => {
    return (
        <article className="w-full md:w-full mt-4">
            <label htmlFor={name} className="capitalize">{label}</label> <br />
            <Field as="textarea" name={name} id={name} {...rest} className="w-full p-2 border" />
            <ErrorMessage name={name} component={Error} />
        </article>
    )
}

export default TextArea