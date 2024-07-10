import React, { useContext, useState } from "react";
const AuthContext = React.createContext();
import toast from "react-hot-toast";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  //   handle the signup
  const handleSignup = async (values) => {
    setLoading(true);
    const formData = new FormData()
    for (let key in values) {
      formData.append(key, values[key])
    }
    try {
      const res = await axios.post(
        "http://localhost:3000/user/register",
        formData)
      toast.success(res.data.message)
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong, please try again");
    } finally {
      setLoading(false)
    }
  };
  return (
    <AuthContext.Provider value={{ loading, handleSignup }}>
      {children}
    </AuthContext.Provider>
  );
};
// custom hook for using context
export const useAuthContext = () => useContext(AuthContext);
export { AuthContext, AuthProvider };
