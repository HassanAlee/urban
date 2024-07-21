import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Grid from '../../Grid';
import FormControl from '../../form/FormControl';
import Error from '../../Error';
import { ButtonFilled } from '../../Buttons';

const AddProductForm = () => {
    const [imagePreviews, setImagePreviews] = React.useState([]);
    const initialValues = {
        name: '',
        price: '',
        stock: '',
        sale: '',
        discount: '',
        sizes: '',
        description: '',
        images: null
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        price: Yup.number().required('Required').positive('Must be a positive number'),
        stock: Yup.number().required('Required').positive('Must be a positive number').integer('Must be an integer'),
        sale: Yup.string().required('Required'),
        discount: Yup.number().required('Required').positive('Must be a positive number'),
        sizes: Yup.array().of(Yup.string().required()).required('Required'),
        description: Yup.string().required('Required'),
        images: Yup.mixed().required('Required')
    });

    const handleSubmit = (values) => {
        console.log(values);
        // Handle form submission
    };

    const handleFileChange = (event, setFieldValue) => {
        const files = event.currentTarget.files;
        setFieldValue('images', files);

        const fileArray = Array.from(files).map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        Promise.all(fileArray)
            .then(images => setImagePreviews(images))
            .catch(error => console.error('Error loading images:', error));
    };

    const sizesOptions = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
    const radioOptions = ["No", "Yes"]
    return (
        <div className='flex items-center justify-center h-full w-full'>
            <article className='bg-white p-6 max-h-full overflow-y-scroll'>
                <h1 className='font-bold text-xl text-center capitalize'>Add New Product</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue }) => (
                        <Form>
                            <Grid className="justify-between mb-6">
                                <article className="w-full md:w-[47.5%]">
                                    <FormControl control="input" name="name" label="Name" type="text" />
                                </article>
                                <article className="w-full md:w-[47.5%]">
                                    <FormControl control="input" name="price" label="Price" type="text" />
                                </article>
                            </Grid>
                            <Grid className="justify-between mb-6 items-center">
                                <article className="w-full md:w-[47%] ">
                                    <FormControl control="input" name="stock" label="Stock" type="text" />
                                </article>
                                <article className="w-full md:w-[48%]">
                                    <FormControl control="input" name="discount" label="Discount" type="text" />
                                </article>
                            </Grid>
                            <article className="w-full mb-4 ">
                                <FormControl control="radio" name="sale" label="On Sale" options={radioOptions} />
                            </article>
                            <Grid className="justify-between mb-6">

                                <article className="w-full">
                                    <FormControl control="checkbox" name="sizes" label="Sizes" options={sizesOptions} />
                                </article>
                            </Grid>
                            <FormControl control="textarea" label="Description" name="description" />
                            <div className='mt-4'>
                                <label htmlFor={"images"} className="capitalize">Product Images</label> <br />
                                <input
                                    id="images"
                                    name="images"
                                    type="file"
                                    multiple
                                    className='mt-2'
                                    onChange={(event) => handleFileChange(event, setFieldValue)}
                                />
                                <ErrorMessage name="images" component={Error} />
                            </div>
                            {
                                imagePreviews.length > 0 && <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 mt-2">
                                    {
                                        imagePreviews.map((_, i) => <div key={i} className="avatar">
                                            <div className="w-16 rounded">
                                                <img src={_} alt='image' />
                                            </div>
                                        </div>)
                                    }
                                </div>
                            }
                            <ButtonFilled type="submit" text={"add product"} optClasses='mt-4 block' />
                        </Form>
                    )}
                </Formik>
            </article>
        </div>
    );
};

export default AddProductForm;
