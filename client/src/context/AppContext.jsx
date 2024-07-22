import React, { useContext, useState } from "react";
import toast from 'react-hot-toast'
import axios from 'axios'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(null)
    // add product handler
    const addProduct = async (data) => {
        setLoading(true)
        try {
            const formData = new FormData()
            // Append non-file fields
            for (let key in data) {
                if (key !== 'images' && key !== 'sizes') {
                    formData.append(key, data[key]);
                }
            }
            // Append images (FileList)
            Array.from(data.images).forEach((img) => formData.append('images', img));
            // Append sizes array
            formData.append('sizes', JSON.stringify(data.sizes));
            const res = await axios.post('http://localhost:3000/product/add-product', formData, {
                withCredentials: true
            })
            setProducts(prev => {
                if (prev) {
                    [...prev, res.data.product]
                } else {
                    [res.data.product]
                }
            })
            toast.success(res.data.message)
        } catch (error) {
            toast.error(error.message)
            throw error()
        } finally {
            setLoading(false)
        }
    }
    return <AppContext.Provider value={{ addProduct, loading, products }}>
        {children}
    </AppContext.Provider>
}
export const useAppContext = () => {
    return useContext(AppContext)
}
export { AppProvider }