import { Field, ErrorMessage } from 'formik'
import Error from '../Error'
import React from 'react'
const Radio = ({ label, name, options, ...rest }) => {
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return (
                            <div className='mt-2'>
                                {
                                    options.map((_, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <input type='radio' id={_} {...field} value={_} checked={field.value == _} className='text-xs mr-1' />
                                                <label htmlFor={_} className='mr-8'>{_.toString()}</label>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={Error} />
        </div>
    )
}

export default Radio