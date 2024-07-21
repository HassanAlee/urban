import { Field, ErrorMessage } from 'formik';
import Error from '../Error';
import React from 'react';

const Checkbox = ({ label, name, options, ...rest }) => {
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return (
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 border p-2">
                                {options.map((option, i) => (
                                    <div key={i} className="flex items-center">
                                        <input
                                            type='checkbox'
                                            id={option}
                                            {...field}
                                            value={option}
                                            checked={field.value.includes(option)}
                                            className={`mr-2 checkbox checkbox-xs ${field.value.includes(option) && "checkbox-info"}`}
                                        />
                                        <label htmlFor={option}>{option}</label>
                                    </div>
                                ))}
                            </div>
                        );
                    }
                }
            </Field>
            <ErrorMessage name={name} component={Error} />
        </div>
    );
};

export default Checkbox;
