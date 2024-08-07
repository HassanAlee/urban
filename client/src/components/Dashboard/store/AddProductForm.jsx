import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import Grid from '../../Grid';
import FormControl from '../../form/FormControl';
import Error from '../../Error';
import { ButtonFilled } from '../../Buttons';
import { useAppContext } from '../../../context/AppContext';

const AddProductForm = ({ setShowForm }) => {
    const [imagePreviews, setImagePreviews] = React.useState([]);
    const { addProduct, loading } = useAppContext()
    const initialValues = {
        name: '',
        price: '',
        stock: '',
        sale: 'No',
        discount: 0,
        sizes: '',
        description: '',
        images: null
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        price: Yup.number().required('Required').positive('Must be a positive number'),
        stock: Yup.number().required('Required').positive('Must be a positive number').integer('Must be an integer'),
        sale: Yup.string().required('Required'),
        // discount: Yup.number().notRequired().positive('Must be a positive number'),
        sizes: Yup.array().of(Yup.string().required()).required('Required'),
        description: Yup.string().required('Required'),
        images: Yup.mixed().required('Required')
    });

    const handleSubmit = (values, { resetForm }) => {
        resetForm()
        setImagePreviews([])
        addProduct(values).then(() => {
            setTimeout(() => setShowForm(false), 1500)
        })
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
                            <Grid className="justify-between mb-6 items-center gap-8">
                                <article className="w-full flex-1 ">
                                    <FormControl control="input" name="stock" label="Stock" type="text" />
                                </article>
                                <Field>
                                    {
                                        field => {
                                            return field.form.values.sale == "Yes" && <article className={`w-full md:w-[48%] flex-1`}>
                                                <label htmlFor="discount">Discount</label>
                                                <input type="text" name='discount' id='discount' className='border p-2 w-full' />
                                            </article>
                                        }
                                    }
                                </Field>
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
                            <div className='flex mt-2 justify-center gap-2'>
                                <ButtonFilled disabled={loading} type="submit" text={loading ? "Saving..." : "add product"} optClasses='mt-4 mx-0' />
                                <ButtonFilled disabled={loading} type="button" text={"Cancel"} optClasses='mt-4 mx-0' onClick={() => setShowForm(false)} />
                            </div>
                        </Form>
                    )}
                </Formik>
            </article>
        </div>
    );
};

export default AddProductForm;
