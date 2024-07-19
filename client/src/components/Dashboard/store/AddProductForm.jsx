import React from 'react'
import { Formik, Form } from 'formik'
import Grid from '../../Grid'
import FormControl from '../../form/FormControl'
const AddProductForm = () => {
    return (
        <div className='flex items-center justify-center h-full w-full'>
            <article className='bg-white p-6'>
                <h1 className='font-bold text-4xl capitalize'>add new product</h1>
                <Formik>
                    {
                        formik => {
                            return <Form>
                                <Grid className={"justify-between mb-6"}>
                                    <article className="w-full md:w-[47.5%] ">
                                        <FormControl control={"input"} name="name" label="Name" type="text" />
                                    </article>
                                    <article className="w-full md:w-[47.5%]">
                                        <FormControl control={"input"} name="price" label="Price" type="text" />
                                    </article>
                                </Grid>
                                <Grid className={"justify-between mb-6"}>
                                    <article className="w-full md:w-[47.5%] ">
                                        <FormControl control={"input"} name="stock" label="Stock" type="text" />
                                    </article>
                                    <article className="w-full md:w-[47.5%]">
                                        <FormControl control={"input"} name="sale" label="On Sale" type="text" />
                                    </article>
                                </Grid>
                                <Grid className={"justify-between mb-6"}>
                                    <article className="w-full md:w-[47.5%] ">
                                        <FormControl control={"input"} name="discount" label="Discount Price" type="text" />
                                    </article>
                                    <article className="w-full md:w-[47.5%]">
                                        <FormControl control={"input"} name="sizes" label="Sizes" type="text" />
                                    </article>
                                </Grid>
                            </Form>
                        }
                    }
                </Formik>
            </article>
        </div>
    )
}

export default AddProductForm