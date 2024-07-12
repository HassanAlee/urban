import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import FormControl from '../form/FormControl'
import { ButtonFilled } from '../Buttons'
const initialValues = {
    name: "",
    phone: ""
}
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required")
})
const Profile = ({ setStep, data, setData }) => {
    const [image, setImage] = useState(null)
    const onSubmit = (values) => {
        setData({ ...data, ...values })
        setStep(3)
    }
    // change handler only for the image
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData({ ...data, image: file })
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }
    return (
        <>
            <div className='text-center mt-6'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 cursor-pointer">
                        <img src={image ? image : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} onClick={() => {
                            document.getElementById('image').click()
                        }} />
                    </div>
                </div> <br />
                <input type='file' id='image' name="image" className='mx-auto hidden' onChange={handleImageChange} />
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => {
                        return <Form className='w-full'>
                            <FormControl control="input" type="text" name="name" id="name" label="Name" />
                            <article className='my-6'>
                                <FormControl control="input" name="phone" id="phone" label="Phone" type="tel" />
                            </article>
                            <div className='text-end mt-6'>
                                <ButtonFilled text={"next"} type="submit" />
                            </div>
                        </Form>
                    }
                }
            </Formik>
        </>
    )
}

export default Profile